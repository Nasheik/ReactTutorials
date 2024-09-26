import { Schema, model, models } from 'mongoose';

export interface IUser {
    clerkId: string; // Clerk unique ID, required
    email: string; // Email, required
    username: string; // Username, required
    photo?: string; // Optional photo URL
    firstName: string; // Required first name
    lastName: string; // Required last name
    planId?: string; // Optional, plan ID for user subscription
    creditBalance: number; // Number of credits, default is 0
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  photo: { type: String }, // URL or path to the photo
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  planId: { type: String, default: 1 }, // Reference to plan information, if applicable
  creditBalance: { type: Number, default: 0 }, // Default credit balance is 0
});

const User = models?.User || model('User', UserSchema);
export default User;
