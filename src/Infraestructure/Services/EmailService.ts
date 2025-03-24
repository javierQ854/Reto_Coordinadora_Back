import { IEmailService } from "../../Domain/IEmailService";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config(); 

export class EmailService implements IEmailService {
  private transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  async sendEmail(to: string, subject: string, body: string): Promise<void> {
    await this.transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      html: body, 
    });
  }
}
