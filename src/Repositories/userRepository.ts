import { ResultSetHeader, RowDataPacket } from "mysql2";
import pool from "../Database/database";
import bcrypt from "bcryptjs";
export class userRepository {

  static async getUserByEmail(email: string): Promise<RowDataPacket[]> {
    const [rows] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );
    return rows;
  }

  static async createUser(name: string,email: string,password: string,role: string = "user"): Promise<ResultSetHeader> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await pool.query<ResultSetHeader>(
      "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
      [name, email, hashedPassword, role]
    );
    return result;
  }
}