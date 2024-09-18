<<<<<<< HEAD
// import { Schema, model } from "mongoose";

// const userSchema = new Schema ({
//     email : String,
//     password : String
// }, { timestamps: true })

// const User = model ('User', userSchema)

// export default User

// import { Schema, model } from "mongoose";

// const userSchema = new Schema({
//     email: String,
//     password: String,
//     resetToken: String,
//     resetTokenExpiration: Date
// }, { timestamps: true })

// const User = model('User', userSchema)

// export default User


import { Schema, model } from "mongoose";

const userSchema = new Schema({
    email: String,
    password: String,
    resetToken: String,
    resetTokenExpiration: Date,
    passwordChangedAt: Date,
    failedLoginAttempts: { type: Number, default: 0 },
    accountLockedUntil: Date
}, { timestamps: true });

const User = model('User', userSchema);

export default User;
=======

import { Schema, model } from 'mongoose';
import crypto from 'crypto';

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: { type: String },
  googleId: { type: String },
  facebookId: { type: String },
  refreshToken: { type: String },
}, { timestamps: true });

const hashPassword = async (password) => {
  try {
    const salt = crypto.randomBytes(16).toString('hex');
    const derivedKey = crypto.scryptSync(password, salt, 64);
    return `${salt}:${derivedKey.toString('hex')}`;
  } catch (err) {
    throw new Error('Error hashing password');
  }
};

const verifyPassword = async (hashedPassword, password) => {
  try {
    const [salt, key] = hashedPassword.split(':');
    const derivedKey = crypto.scryptSync(password, salt, 64);
    return key === derivedKey.toString('hex');
  } catch (err) {
    throw new Error('Error verifying password');
  }
};

const User = model('User', userSchema);

export { User, hashPassword, verifyPassword };
>>>>>>> 0b65d09791b8f6b2ead02c3f731145d2f66ce770
