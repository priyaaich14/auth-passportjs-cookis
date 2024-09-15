// import { Schema, model } from 'mongoose';

// const emailSchema = new Schema({
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     action: { type: String, required: true } // E.g., 'register', 'login', 'forgotPassword', 'resetPassword'
// }, { timestamps: true });

// const Email = model('Email', emailSchema);

// export default Email;
// import { Schema, model } from 'mongoose';

// const emailSchema = new Schema({
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     action: { type: String, required: true } // E.g., 'register', 'login', 'forgotPassword', 'resetPassword'
// }, { timestamps: true });

// const Email = model('Email', emailSchema);

// export default Email;


import { Schema, model } from 'mongoose';

const emailSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    action: { type: String, required: true }
}, { timestamps: true })

emailSchema.index({ email: 1, action: 1 }, { unique: true })

const Email = model('Email', emailSchema)

export default Email
