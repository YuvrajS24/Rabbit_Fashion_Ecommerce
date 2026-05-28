const mongoose = require('mongoose');

let cached = global.mongoose || { connection: null, promise: null };

const connectDB = async () => {
    try {
        if (cached.connection) {
            console.log("MongoDB reusing existing connection");
            return cached.connection;
        }

        if (!cached.promise) {
            cached.promise = mongoose.connect(process.env.MONGO_URI, {
                maxPoolSize: 10,
            });
        }

        cached.connection = await cached.promise;
        global.mongoose = cached;

        console.log("MongoDB connection successful!");
        return cached.connection;

    } catch (err) {
        cached.promise = null;
        console.error("MongoDB connection failed.", err);
        process.exit(1);
    }
};

module.exports = connectDB;