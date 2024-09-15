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
