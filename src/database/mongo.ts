import 'dotenv/config';
import mongoose from 'mongoose';

const { MONGODB_URI } = process.env;
const uri = MONGODB_URI || 'mongodb://localhost:27017/test';

export const mongoConnector = async (): Promise<void> => {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
};
