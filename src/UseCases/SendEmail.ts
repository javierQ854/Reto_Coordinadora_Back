import { IEmailService } from "../Domain/IEmailService";
import { generarPlantillaCorreo } from "../Utils/EmailTemplate";

export class SendEmail {
  constructor(private emailService: IEmailService) {}

  async execute(emailData: {
    to: string;
    subject: string;
    datos: {
      peso: number;
      dimension: string;
      tipoProducto: string;
      direccionDestino: string;
      ciudad: string;
      estado: string;
    };
  }): Promise<void> {
    const emailBody = generarPlantillaCorreo(emailData.datos);
    await this.emailService.sendEmail(emailData.to, emailData.subject, emailBody);
  }
}
