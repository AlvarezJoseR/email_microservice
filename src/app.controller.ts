import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateEmailDto } from './dto/email.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Sends an email using the provided data.
   *
   * @route POST /sendEmail
   * @param {CreateEmailDto} createEmail - The DTO containing email details 
   * (recipient, subject, body, etc.).
   * @returns {Promise<any>} The result of the email sending operation.
   */
  @Post('sendEmail')
  sendEmail(@Body() createEmail: CreateEmailDto) {
    return this.appService.sendEmail(createEmail);
  }
}
