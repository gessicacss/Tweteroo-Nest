export class Tweet {
  username: string;
  avatar: string;
  tweet: string;

  constructor(usernarme: string, tweet: string, avatar: string) {
    this.username = usernarme;
    this.avatar = avatar;
    this.tweet = tweet;
  }
}
