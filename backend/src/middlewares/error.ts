import {
  INTERNAL_SERVER_ERROR,
  INTERNAL_SERVER_ERROR_MESSAGE,
} from "../constants/constants";

import { AppError } from "../utils/AppError";

import { ErrorRequestHandler } from "express";

export const errorMiddleware: ErrorRequestHandler = (
  err: AppError | Error,
  req,
  res,
  next
) => {
  /* For Operational Errors */

  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      success: err.success,
      message: err.message,
      details: err.extraDetails || null,
    });
    return;
  }

  /* For Programmatic Errors */

  console.log("Error occured", err);

  res.status(INTERNAL_SERVER_ERROR).json({
    message: INTERNAL_SERVER_ERROR_MESSAGE,
  });
};
