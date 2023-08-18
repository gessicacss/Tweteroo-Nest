import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth(): string {
    return `I'm Okay!`;
  }

  getTweets() {
    return 'Opa, ainda não fui implementado!!';
  }
}
