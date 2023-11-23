import mongoose from "mongoose";

let isConnected  = false;

export const connectToDb = async () => {
    mongoose.set('strict.query', true);

    if (isConnected) {
        console.log("=> using existing database connection");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'share_prompt',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected = true;
        console.log("=> new database connection");
    } catch (error) {
        console.log("=> error connecting to database", error);
    }
}