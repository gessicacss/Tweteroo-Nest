import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entities';
import { Tweet } from './entities/tweet.entities';
import { CreateUserDTO } from './dtos/createUserDTO';

@Injectable()
export class AppService {
  private users: User[];
  private tweets: Tweet[];

  constructor() {
    this.users = [];
    this.tweets = [];
  }

  getHealth(): string {
    return `I'm okay!`;
  }

  createUser(user: CreateUserDTO) {
    const newUser = new User(user.username, user.avatar);
    this.users.push(newUser);
  }

  getTweets() {
    return this.tweets;
  }
}
