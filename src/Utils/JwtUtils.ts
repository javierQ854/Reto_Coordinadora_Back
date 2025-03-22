import jwt from "jsonwebtoken";
import "dotenv/config";

const SECRET_KEY = process.env.JWT_SECRET || "supersecreto";
export class JwtUtils {
    static generateToken(userId: number, role: string) {
      return jwt.sign({ userId, role }, SECRET_KEY, { expiresIn: "1h" });
    }
}