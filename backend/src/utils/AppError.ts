export class AppError extends Error {
  public success: boolean;
  public statusCode: number;
  public isOperational: boolean;
  public extraDetails: unknown;

  constructor(
    success: boolean,
    message: string,
    statusCode: number,
    isOperational: boolean,
    extraDetails?: unknown
  ) {
    super(message);

    this.success = success;
    this.statusCode = statusCode;
    this.extraDetails = extraDetails;
    this.isOperational = isOperational;
  }
}
