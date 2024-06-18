import cors from "cors";
import express from "express";
import { MainRouter } from "./routes/index.routes";

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use("/", MainRouter);

app.listen(process.env.PORT || 5000, () =>
  console.log("Server is listening...")
);
