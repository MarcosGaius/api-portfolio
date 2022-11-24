import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";

export const handleErrorMiddleware = (
  err: AppError | Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  console.log("Internal Server Error", err);

  return res.status(500).json({ message: "Internal Server Error." });
};
