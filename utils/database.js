import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectToDb = async () => {
    console.log("connectToDb called");
    mongoose.set("strictQuery", true);

    //check if mongo is connected
    if (isConnected) {
        console.log("Mongo Db is already Connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        isConnected = true;

        console.log("MongoDB connected");
    } catch (err) {
        console.log("database err", err);
    }
};
