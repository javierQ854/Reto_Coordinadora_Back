import { ResultSetHeader, RowDataPacket } from "mysql2";
import pool from "../Database/database";
import bcrypt from "bcryptjs";

export class ShipmentRepository {
  
  static async getShipments(): Promise<RowDataPacket[]> {
    const [result] = await pool.query<RowDataPacket[]>("SELECT * FROM envios");
    return result;
  }

  static async postShipments(userId: number,peso: number,dimension: string,tipoProducto: string,direccionDestino: string,ciudad: string,estado:string):Promise<number>{
    const [result] = await pool.query<ResultSetHeader>(
      "INSERT INTO envios (user_id, peso, dimension, tipo_producto, direccion_destino, ciudad, estado)VALUES (?,?,?,?,?,?,?)",
      [userId, peso, dimension, tipoProducto, direccionDestino, ciudad, estado]
    );
    return result.insertId
  }
}
