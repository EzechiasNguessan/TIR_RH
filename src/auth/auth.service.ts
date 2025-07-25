import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EmployeService } from 'src/employe/employe.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly employeService: EmployeService,
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    return this.employeService.create(dto);
  }

  async login(dto: LoginDto) {
    const employe = await this.employeService.findOne(dto.email);
    if (!employe) {
      throw new UnauthorizedException('Email ou mot de passe invalide');
    }

    const passwordMatch = await bcrypt.compare(dto.password, employe.password);
    if (!passwordMatch) {
      throw new UnauthorizedException('Email ou mot de passe invalide');
    }

    const payload = { sub: employe.id, email: employe.email };
    const token = await this.jwtService.signAsync(payload);

    return { access_token: token };
  }
  async validateUser(email: string, password: string) {
    const employe = await this.employeService.findOne(email);
    if (!employe) {
      return null;
    }

    const passwordMatch = await bcrypt.compare(password, employe.password);
    if (!passwordMatch) {
      return null;
    }

    return { id: employe.id, email: employe.email };
  }
}
