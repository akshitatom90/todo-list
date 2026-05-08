import { Request } from "express";

export interface User {
  userId: string;
  userName: string;
  userEmail: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
