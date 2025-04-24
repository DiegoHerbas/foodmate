import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcryptjs';
import { UserDto } from './dto/user.dto';

@Injectable()
export class AuthService {
  private users: UserDto[] = [];
  constructor(private jwtService: JwtService) {
    //
  }

  async register(dto: RegisterDto) {
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const user: UserDto = {
      id: Date.now().toString(),
      email: dto.email,
      password: hashedPassword,
      role: dto.role || 'user',
    };
    this.users.push(user);
    return {
      message: 'User registered',
      user: { email: user.email, role: user.role },
    };
  }

  async login(dto: LoginDto) {
    const user = this.users.find((u) => u.email === dto.email);
    if (!user || !(await bcrypt.compare(dto.password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user.id, email: user.email, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(userId: string) {
    await Promise.resolve();
    return this.users.find((u) => u.id === userId);
  }
}
