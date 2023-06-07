import { NextFunction, Request, Response } from 'express';
import User from '../models/user.model';
import { generateToken } from '../middlewares/authMiddleware';
import { sendSMS } from '../middlewares/vonageMiddleware';
import { generateOTP, hashing, passwordMatcher } from '../lib/helpers';

export const register = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { name, email, mobile, password } = request.body;

    const existingUser = await User.findOne({ $or: [{ email }, { mobile }] });
    if (existingUser) {
      return response.status(409).json({ error: 'User already exists!' });
    }

    const otpCode = generateOTP();
    const otpCreated = new Date();
    const hashedPassword = await hashing(password);
    const newUser = new User({
      name,
      email,
      mobile,
      password: hashedPassword,
      otp: { code: otpCode, created: otpCreated },
    });

    await newUser.save();

    // send verification code
    await sendSMS(newUser.mobile, `Your verification code is: ${otpCode}`);

    return response.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    next(error);
  }
};

export const login = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { email, password } = request.body;

    const user = await User.findOne({ email });
    if (!user) {
      return response.status(404).json({ error: 'User not found' });
    }

    const passwordMatch = await passwordMatcher(password, user.password);
    if (!passwordMatch) {
      return response.status(401).json({ error: 'Invalid password' });
    }

    const otpCode = generateOTP();
    const otpCreated = new Date();
    user.otp = { code: otpCode, created: otpCreated };
    await user.save();

    // send verification code
    await sendSMS(user.mobile, `Your verification code is: ${otpCode}`);

    return response.status(200).json({
      message: 'Great! Complete Two Factor Authentication',
      id: user._id,
      mobile: user.mobile,
    });
  } catch (error) {
    next(error);
  }
};

export const login2FA = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { email, otp } = request.body;

    const user = await User.findOne({ email });
    if (!user) {
      return response.status(404).json({ error: 'User not found' });
    }

    if (user.otp?.code !== otp) {
      return response.status(401).json({ error: 'Invalid OTP' });
    }

    // Check if OTP is expired (5-minute OTP validity)
    if (user.otp) {
      const otpExpiration = new Date(user.otp.created.getTime() + 5 * 60000);
      const currentTime = new Date();

      if (currentTime > otpExpiration) {
        return response.status(401).json({ error: 'OTP has expired' });
      }
    }

    // access-token initialize
    const token = generateToken(user._id);

    return response.status(200).json({
      message: 'User logged in successfully',
      type: 'Bearer',
      token,
      expire: '10h',
    });
  } catch (error) {
    next(error);
  }
};

export const updateProfile = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { email, name, newPassword } = request.body;
    const { userId } = request.headers;

    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return response.status(404).json({ error: 'User not found!' });
    }

    if (email) user.email = email;
    if (name) user.name = name;
    if (newPassword) user.password = await hashing(newPassword);

    if (email || name || newPassword) await user.save();
    else return response.status(400).json({ error: 'validation failed!' });

    return response.status(200).json({ message: 'User profile updated successfully' });
  } catch (error) {
    next(error);
  }
};
