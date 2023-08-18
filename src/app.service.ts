import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from './entities/user.entities';
import { Tweet } from './entities/tweet.entities';
import { CreateUserDTO } from './dtos/createUserDTO';
import { CreateTweetDTO } from './dtos/createTweetDTO';

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

  createTweet(body: CreateTweetDTO) {
    const signedUpUser = this.users.find(
      (user) => user.username === body.username,
    );
    if (!signedUpUser) {
      throw new UnauthorizedException();
    }

    const newTweet = new Tweet(body.username, body.tweet, signedUpUser.avatar);
    this.tweets.push(newTweet);
  }

  getTweets(page: number | null) {
    if (!page) {
      page = 1;
    }

    if (isNaN(page) || page < 1) {
      throw new BadRequestException();
    }
    const tweetsPerPage = 15;
    const tweetsReverse = this.tweets.reverse();
    const startIndex = (Number(page) - 1) * tweetsPerPage;
    const endIndex = startIndex + tweetsPerPage;
    const latestTweets = tweetsReverse.slice(startIndex, endIndex);
    return latestTweets;
  }
}
