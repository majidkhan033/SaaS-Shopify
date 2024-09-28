import mongoose from "mongoose";

async function connectDB() {
    try {
        await mongoose.connect("mongodb+srv://MajidKhan:Khan%402762@cluster0.o4eq7.mongodb.net/SaaS-Shopify", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
    })
        console.log("MongoDB is Connected");

    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}

connectDB();    