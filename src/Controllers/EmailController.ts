// src/interfaces/controllers/EmailController.ts
import { Request, Response } from "express";
import { SendEmail } from "../UseCases/SendEmail";  
import { emailService } from "../Infraestructure/Services/EmailService"; 
import { Email } from "../Domain/Email";

export class EmailController {
  static async sendEmail(req: Request, res: Response): Promise<void> {
    try {
      const emailData = new Email(req.body);
      const sendEmail = new SendEmail(emailService);
      await sendEmail.execute(emailData);
      res.status(200).json({ message: "Correo enviado exitosamente" });
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }
}
