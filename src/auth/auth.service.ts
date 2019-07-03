import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async signUp(authCredentiasDto: AuthCredentialsDto): Promise<void> {
    return this.userRepository.signUp(authCredentiasDto);
  }

  async signIn(authCredentiasDto: AuthCredentialsDto): Promise<void> {
    const result = this.userRepository.validateUserPassword(authCredentiasDto);
    console.log(result);
  }
}
