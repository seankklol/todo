import mongoose from "mongoose";

const connectDB = async () => {
    if (mongoose.connections[0].readyState) {
        console.log("Already connected.");
        return true;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to the database.");
        return true;
    }  catch (error) {
        console.log("Error connecting to the database: ", error);
    }
}

export default connectDB;