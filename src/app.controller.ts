import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDTO } from './dtos/createUserDTO';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHealth(): string {
    return this.appService.getHealth();
  }

  @Post('sign-up')
  @HttpCode(HttpStatus.OK)
  postUser(@Body() body: CreateUserDTO) {
    return this.appService.createUser(body);
  }

  @Get('tweets')
  getTweets() {
    return this.appService.getTweets();
  }
}
