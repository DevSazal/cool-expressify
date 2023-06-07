import { model, Schema, Document } from 'mongoose';

interface IOtp {
  code: string;
  created: Date;
}

interface IUser extends Document {
  name: string;
  email: string;
  mobile: string;
  password: string;
  otp?: IOtp;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  otp: {
    code: { type: String },
    created: { type: Date },
  },
});

const User = model<IUser>('User', UserSchema);

export default User;
