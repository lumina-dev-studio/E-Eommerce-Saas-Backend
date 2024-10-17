import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";

import cookieParser from "cookie-parser";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";




const app: Application = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "https://sass-project-dashboard-client-side.vercel.app"],
    credentials: true,
  })
);

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "Sass Project Server...",
  });
});

app.use("/", router);

app.use(globalErrorHandler);

export default app;
