import { Request, Response, NextFunction } from "express";
import { authService } from "../services/auth-service/auth.service";
import { StatusCodes } from "http-status-codes";

interface UserRequestBody {
  email: string;
  password: string;
}
interface UserRequest extends Request {
  body: UserRequestBody;
}
export async function login(
  req: UserRequest,
  res: Response,
  next: NextFunction,
) {
  try {
    const data = await authService.register(req.body);
    res.status(StatusCodes.CREATED).json(data);
  } catch (e) {
    next(e);
  }
}

export function register() {
  return;
}
