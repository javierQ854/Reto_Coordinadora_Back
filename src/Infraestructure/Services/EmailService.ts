// src/infrastructure/services/EmailService.ts
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { Email } from "../../Domain/Email";

dotenv.config();

export class EmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async send(email: Email): Promise<void> {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email.to,
      subject: email.subject,
      text: email.body,
    };

    await this.transporter.sendMail(mailOptions);
  }
}

export const emailService = new EmailService();
