import { Request, Response } from "express";
import { ShipmentRepository } from "../Repositories/shipmentRepository";
export class ShipmentController {
    static async getEnviosUser(req: Request, res: Response): Promise<void> {
        try {
            const result = await ShipmentRepository.getShipments();
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: "Error al obtener envíos", error });
        }
    }

    static async postEnviosUser(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params; // Obtener ID desde la URL
            const { peso, dimension, tipoProducto, direccionDestino, ciudad, estado} = req.body;

            if (!id || !peso || !dimension || !tipoProducto || !direccionDestino || !ciudad || !estado ) {
                res.status(400).json({ message: "Faltan datos obligatorios." });
                return;
            }

            const result = await ShipmentRepository.postShipments(parseInt(id),peso,dimension,tipoProducto,direccionDestino,ciudad,estado);
            res.status(201).json({ message: "Envío creado con éxito.", id: result });
        } catch (error) {
            res.status(500).json({ message: "Error al crear el envio", error });
        }
    }

}