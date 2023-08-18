import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { User } from '../entities/user.entities';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsUrl()
  @IsNotEmpty()
  avatar: string;

  toUser() {
    return new User(this.username, this.avatar);
  }
}
