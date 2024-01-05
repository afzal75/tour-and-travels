import mongoose, { Schema } from 'mongoose';
import { IUser } from '../interfaces/user.interface';

// Define Mongoose schema
const userSchema = new Schema<IUser>({
    name: { type: String, required: [true, 'Name is required'] },
    age: { type: Number, required: [true, 'Age is required'] },
    email: { type: String, required: [true, 'Email is required'], unique: true },
    photo: { type: String, },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: "user",

    },
    userStatus: {
        type: String,
        enum: ['active', 'inactive'],
        default: "active"
    }
});

// Create and export Mongoose model
const User = mongoose.model<IUser>('User', userSchema);

export { User };
