import { ResultSetHeader, RowDataPacket } from "mysql2";
import pool from "../Database/database";
export class TransportistasRepository{
    static async posttransportista(nombre:string, licencia: string,telefono:string,email:string,vehiculo:string,placa:string):Promise<number>{
        const [result] = await pool.query<ResultSetHeader>(
          "INSERT INTO transportistas(nombre,licencia,telefono,email,vehiculo,placa) values (?,?,?,?,?,?);",
          [nombre, licencia, telefono, email, vehiculo, placa]
        );
        return result.insertId
      }
      static async getTransportistas(): Promise<RowDataPacket[]> {
        const [result] = await pool.query<RowDataPacket[]>("SELECT * FROM transportistas");
        return result;
      }
}