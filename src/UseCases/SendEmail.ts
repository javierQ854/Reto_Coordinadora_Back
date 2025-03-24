// src/application/use-cases/SendEmail.ts
import { Email } from "../Domain/Email";
import { EmailService } from "../Infraestructure/Services/EmailService"; 

export class SendEmail {
  private emailService: EmailService;

  constructor(emailService: EmailService) {
    this.emailService = emailService;
  }

  async execute(emailData: Email): Promise<void> {
    return await this.emailService.send(emailData);
  }
}
