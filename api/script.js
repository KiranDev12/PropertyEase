import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Connect to MongoDB Atlas cluster
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Drop the entire database
mongoose.connection
  .dropDatabase()
  .then(() => console.log("Database dropped successfully"))
  .catch((err) => console.error("Error dropping database:", err))
  .finally(() => mongoose.disconnect());
