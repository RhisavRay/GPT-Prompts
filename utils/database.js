import mongoose, { mongo } from "mongoose";

let isConnected = false; //Used to track the connection status

export const connectToDb = async() => {
    mongoose.set('strictQuery', true)

    if(isConnected)
    {
        console.log("MongoDB is already connected")
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "Share_prompt",
            useNewUrlParser: true,
            useUnifiedParser: true
        })

        isConnected = true

        console.log("MongoDB is already connected")
    } catch (error) {
        console.log(error)
    }
}