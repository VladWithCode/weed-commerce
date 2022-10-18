import mongoose from 'mongoose';

const connectMongo = async () => {
  if (mongoose.connections.length > 0) return;

  try {
    await mongoose.connect(
      process.env.DB_URI || 'mongodb://127.0.0.1:27017/test_db'
    );
  } catch (err) {
    console.error('Error while connecting to DB: ', err);
    return err;
  }
};

export default connectMongo;
