import { Injectable, UnauthorizedException } from '@nestjs/common';
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
    const username = await this.userRepository.validateUserPassword(
      authCredentiasDto,
    );

    if (!username) {
      throw new UnauthorizedException('Invalid credentials!');
    }
  }
}
