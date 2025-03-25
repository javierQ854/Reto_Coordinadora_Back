import { Request, Response } from "express";
import { TransportistasRepository } from "../Repositories/transportistaRepository";

export class TransportistaControler {
    static async postTransportista(req: Request, res: Response): Promise<void> {
        try {
            const { nombre, licencia, telefono, email, vehiculo, placa } = req.body;

            if (!nombre || !licencia || !telefono || !email || !vehiculo || !placa) {
                res.status(400).json({ message: "Faltan datos obligatorios." });
                return;
            }

            const result = await TransportistasRepository.posttransportista(nombre, licencia, telefono, email, vehiculo, placa);
            res.status(201).json({ message: "Transportista creado con exito.", id: result });
        } catch (error) {
            res.status(500).json({ message: "Error al crear, verifique la informacion", error });
        }
    }
    static async getTransportista(req: Request, res: Response): Promise<void> {
        try {
            const result = await TransportistasRepository.getTransportistas();
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: "Error al obtener los datos", error });
        }
    }
}