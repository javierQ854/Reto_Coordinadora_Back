import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Acceso denegado..." });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    (req as any).user = decoded; 
    next(); 
  } catch (error) {
    res.status(403).json({ message: "Token inválido o expirado." });
    return;
  }
};
