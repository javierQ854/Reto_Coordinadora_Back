// src/domain/Email.ts
export class Email {
    to: string;
    subject: string;
    body: string;
  
    constructor({ to, subject, body }: { to: string; subject: string; body: string }) {
      this.to = to;
      this.subject = subject;
      this.body = body;
    }
  }
  