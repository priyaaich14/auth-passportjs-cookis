<<<<<<< HEAD
import mongoose from "mongoose";
const configureDB = async () => {
    //const dbUrl = 'mongodb://localhost:27017/user-auth-mar24'//
    try{
        const db = await mongoose.connect(process.env.DB_URL)
        console.log('connected to db',db.connections[0].name)
    } catch (err) {
        console.log(err)
    }
}

export default configureDB
=======
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const configureDB = async () => {
  try {
    const db = await mongoose.connect(process.env.DB_URL);
    console.log('Connected to db', db.connections[0].name);
  } catch (err) {
    console.log('Database connection error:', err);
  }
};

export default configureDB;
>>>>>>> 0b65d09791b8f6b2ead02c3f731145d2f66ce770
