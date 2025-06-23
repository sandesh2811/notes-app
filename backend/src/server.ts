import dotenv from "dotenv";

/* For env variables */
dotenv.config();

import express from "express";
import cors from "cors";

import { connectDB } from "./db/dbConnect";
import { errorMiddleware } from "./middlewares/error";
import notesRouter from "./routes/notes.route";

const app = express();

/* Middlewares */

/* For CORS */
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: ["GET , POST , PUT ,DELETE , PATCH , HEAD"],
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Routes */

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome!" });
});

app.use("/notes", notesRouter);

/* Error middleware */
app.use(errorMiddleware);

app.listen(process.env.PORT, async () => {
  await connectDB();
  console.log(`Server is running in port : ${process.env.PORT}`);
});
