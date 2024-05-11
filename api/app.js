import express from "express";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
config();
const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser());
app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);
app.listen(8000, () => {
  console.log("Server is running");
});
