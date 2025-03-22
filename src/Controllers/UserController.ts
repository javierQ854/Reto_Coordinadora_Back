import { Request, Response } from "express";
import { userRepository } from "../Repositories/userRepository";
import { JwtUtils } from "../Utils/JwtUtils";
import bcrypt from "bcryptjs";

export class UserController {
    static async register(req: Request, res: Response): Promise<void> {
        try {
            const { name, email, password, role } = req.body;

            if (!name || !email || !password) {
                res.status(400).json({ error: "Name, email, and password are required" });
                return;
            }
            const result = await userRepository.createUser(name, email, password, role);
            res.status(201).json({ message: "User created successfully", userId: result.insertId });
        } catch (error) {
            console.error("Error in register:", error);
            res.status(500).json({ error: "Internal Server Error", details: (error as Error).message });
        }
    }
    static async login(req: Request, res: Response): Promise<void> {
        try {
            // 🔹 Desestructuración correcta de `req.body`
            const { email, password } = req.body;
    
            if (!email || !password) {
                res.status(400).json({ error: "Email and password are required" });
                return
            }
    
            // 🔹 Obtener usuario de la base de datos
            const user = await userRepository.getUserByEmail(email);
            if (user.length === 0) {
                res.status(400).json({ error: "Invalid credentials" });
                return
            }
    
            // 🔹 Comparar contraseñas
            const validPassword = await bcrypt.compare(password, user[0].password);
            if (!validPassword) {
                res.status(401).json({ error: "Invalid credentials" });
                return
            }
            
            const token = JwtUtils.generateToken(user[0].id, user[0].role);
            res.json({ message: "Login successful", token });
    
        } catch (error) {
            res.status(500).json({ error: "Database error", details: error });
            return
        }
    }
    
}