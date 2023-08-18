import { User } from './user.entities';

export class Tweet {
  user: User;
  tweet: string;

  constructor(user: User, tweet: string) {
    this.user = user;
    this.tweet = tweet;
  }
}
