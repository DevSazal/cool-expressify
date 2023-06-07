import { NextFunction, Request, Response } from 'express';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { generateSecretKey } from '../lib/helpers';

const SECRET_KEY = process.env.JWT_SECRET_KEY || generateSecretKey();

export function generateToken(userId: string): string {
  return jwt.sign({ userId }, SECRET_KEY, { expiresIn: '10h' });
}

export function verifyToken(request: Request, response: Response, next: NextFunction) {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).json({ error: 'Unauthorized' });
  }

  const token = authorization.replace('Bearer ', '');

  try {
    const payload = jwt.verify(token, SECRET_KEY) as { userId: string };
    request.headers.userId = payload.userId;
    next();
  } catch (error) {
    return response.status(401).json({ error: 'Invalid token' });
  }
}
