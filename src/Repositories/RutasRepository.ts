import { RowDataPacket } from "mysql2";
import pool from "../Database/database";

export class RutasRepository{
    static async getRutas(): Promise<RowDataPacket[]> {
        const [result] = await pool.query<RowDataPacket[]>("SELECT * FROM rutas");
        return result;
      }
}