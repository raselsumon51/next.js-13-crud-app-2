

import mongoose from "mongoose";
const connectDB = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect('mongodb://localhost:27017/next_crud_13', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
