import { ResultSetHeader, RowDataPacket } from "mysql2";
import pool from "../Database/database";


export class ShipmentRepository {
  
  static async getShipments(): Promise<RowDataPacket[]> {
    const [result] = await pool.query<RowDataPacket[]>(`SELECT 
    e.id_envio,
    u.name AS nombre_usuario,
    e.peso,
    e.dimension,
    e.tipo_producto,
    e.direccion_destino,
    e.ciudad,
    e.estado,
    e.estado_envio,
    e.created_at,
    e.ruta_id
FROM envios e
JOIN users u ON e.user_id = u.id;`);
    return result;
  }

  static async getShipmentsUser(id:number): Promise<RowDataPacket[]> {
    const [result] = await pool.query<RowDataPacket[]>("SELECT * FROM envios WHERE user_id = ?",[id]);
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
