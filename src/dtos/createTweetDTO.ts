import { IsNotEmpty, IsString } from 'class-validator';
import { Tweet } from '../entities/tweet.entities';
import { User } from '../entities/user.entities';

export class CreateTweetDTO {
  @IsString()
  @IsNotEmpty()
  tweet: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  toTweet(user: User) {
    return new Tweet(user, this.tweet);
  }
}
