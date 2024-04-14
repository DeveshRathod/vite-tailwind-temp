import mongoose from "mongoose";

const connectionDB = () =>
  mongoose
    .connect(
      "mongodb+srv://mayur:1234@cluster0.frpv8n8.mongodb.net/vehicle?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("Connected to DB");
    });

export default connectionDB;
