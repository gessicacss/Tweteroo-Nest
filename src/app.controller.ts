import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDTO } from './dtos/createUserDTO';
import { CreateTweetDTO } from './dtos/createTweetDTO';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHealth(): string {
    return this.appService.getHealth();
  }

  @Post('tweets')
  @HttpCode(HttpStatus.CREATED)
  postTweet(@Body() body: CreateTweetDTO) {
    return this.appService.createTweet(body);
  }

  @Post('sign-up')
  @HttpCode(HttpStatus.OK)
  postUser(@Body() body: CreateUserDTO) {
    return this.appService.createUser(body);
  }

  @Get('tweets')
  getTweets(@Query('page') page: number | null) {
    return this.appService.getTweets(page);
  }
}
