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
