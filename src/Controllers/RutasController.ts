import { RutasRepository } from "../Repositories/RutasRepository";
import { Request, Response } from "express";
export class RutasController{
     static async getRutas(req: Request, res: Response): Promise<void> {
            try {
                const result = await RutasRepository.getRutas();
                res.json(result);
            } catch (error) {
                res.status(500).json({ message: "Error al obtener los datos", error });
            }
        }
}