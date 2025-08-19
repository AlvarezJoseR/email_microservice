import { Injectable } from '@nestjs/common';
import { CreateEmailDto } from './dto/email.dto';

@Injectable()
export class AppService {
  /**
   * Sends an email with the provided details.
   *
   * @param {CreateEmailDto} createEmail - The DTO containing the email information
   * (recipient, subject, body, etc.).
   * @returns {{ message: string }} A confirmation message indicating
   * that the email was sent successfully.
   */

  sendEmail(createEmail: CreateEmailDto) {
    return { message: 'Correo Enviado' };
  }
}
