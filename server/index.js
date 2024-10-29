import express from "express";

import { connectDB } from "./db.js";
import { PORT } from "./config.js";

import cookieParser from "cookie-parser";
import cors from "cors";

import userRoutes from "./routes/auth.js";

const app = express();

connectDB();

app.use(express.json());

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/auth", userRoutes);

// app.use("/server", serverRoutes);
// app.use("/server", channelRoutes);
// app.use("/server", eventRoutes);

// app.use("/info", infoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
