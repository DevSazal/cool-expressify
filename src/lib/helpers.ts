import bcrypt from 'bcrypt';
import crypto from 'crypto';

export const hashing = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 10);
};

export const passwordMatcher = async (
  password: string,
  hashedPassword: string,
): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};

export const generateSecretKey = (): string => crypto.randomBytes(32).toString('hex');

export const generateOTP = (length = 6): string => {
  const otp = Array.from({ length }, () => Math.floor(Math.random() * 10));
  return otp.join('');
};
