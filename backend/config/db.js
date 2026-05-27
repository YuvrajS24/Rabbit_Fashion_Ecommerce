const mongoose = require('mongoose');

let cached = global.mongoose || null;

const connectDB = async () => {

  try {

    if (cached) {
      console.log("MongoDB reusing existing connection");
      return cached;
    }

    const connection = await mongoose.connect(process.env.MONGO_URI);

    cached = connection;
    global.mongoose = connection;

    console.log("MongoDB connected successful!");

    return connection;

  } catch (err) {

    console.error("MongoDB connection failed.", err);
    process.exit(1);

  }

};

module.exports = connectDB;