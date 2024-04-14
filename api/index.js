import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectionDB from "./database/connection.js";
import User from "./database/user.model.js";

// Configurations
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

// Connection to DB
connectionDB();

// Routes
app.post("/api/v1/getUser", async (req, res, next) => {
  try {
    const user = await User.findOne({
      vehicleNumber: req.body.vehicleNumber,
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
});

app.post("/api/v1/addUser", async (req, res, next) => {
  try {
    const { name, vehicleNumber } = req.body;
    if (!name || !vehicleNumber) {
      return res
        .status(400)
        .json({ message: "Name and Vehicle Number are required" });
    }
    const user = new User({ name, vehicleNumber });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
