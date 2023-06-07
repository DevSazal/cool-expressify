import crypto from 'crypto';

export const generateSecretKey = (): string => crypto.randomBytes(32).toString('hex');

export const generateOTP = (length = 6): string => {
  const otp = Array.from({ length }, () => Math.floor(Math.random() * 10));
  return otp.join('');
};
