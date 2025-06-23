export class AppError extends Error {
  public success: boolean;
  public statusCode: number;
  public isOperational: boolean;

  constructor(
    success: boolean,
    message: string,
    statusCode: number,
    isOperational: boolean
  ) {
    super(message);

    this.success = success;
    this.statusCode = statusCode;
    this.isOperational = isOperational;
  }
}
