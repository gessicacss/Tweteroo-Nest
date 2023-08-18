export class Tweet {
  private username: string;
  private avatar: string;
  private tweet: string;

  constructor(usernarme: string, tweet: string, avatar: string) {
    this.username = usernarme;
    this.avatar = avatar;
    this.tweet = tweet;
  }
}
