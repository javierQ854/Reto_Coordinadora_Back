import { Request, Response } from "express";
import { SendEmail } from "../UseCases/SendEmail"; 
import { EmailService } from "../Infraestructure/Services/EmailService"; 

export class EmailController {
  static async sendEmail(req: Request, res: Response): Promise<void> {
    try {
      const { to, subject, datos } = req.body;
      const emailService = new EmailService();
      const sendEmail = new SendEmail(emailService);
      await sendEmail.execute({ to, subject, datos });

      res.status(200).json({ message: "Correo enviado exitosamente" });
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }
}
