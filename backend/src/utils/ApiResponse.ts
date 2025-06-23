import { Response } from "express";

type ApiResponseArgs<T> = {
  response: Response;
  statusCode: number;
  success: boolean;
  message: string;
  data?: T;
};

export const ApiResponse = <T>({
  response,
  statusCode,
  success,
  message,
  data,
}: ApiResponseArgs<T>) => {
  return response.status(statusCode).json({
    success,
    message,
    data,
  });
};
