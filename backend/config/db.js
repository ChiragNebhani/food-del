import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://chiragnebhani0:nlnQPVvmgCSykLeS@cluster0.pf3ekyk.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}