import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { RefreshDto } from './dto/refresh.dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  login(dto: LoginDto) {
    // TODO : vérification réelle dans la base
    if (
      dto.email !== 'test@example.com' ||
      dto.mot_de_passe !== 'password123'
    ) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: 'user-id', email: dto.email, role: 'RH' };

    return {
      token: this.jwtService.sign(payload),
      user: {
        email: dto.email,
        role: 'RH',
        employe_email: 'employe@example.com',
      },
    };
  }

  refresh(dto: RefreshDto) {
    try {
      interface JwtPayload {
        sub: string;
        email: string;
        role: string;
        [key: string]: any;
      }
      const decoded = this.jwtService.verify<JwtPayload>(dto.refresh_token);
      const payload = {
        sub: decoded?.sub,
        email: decoded?.email,
        role: decoded?.role,
      };

      return {
        token: this.jwtService.sign(payload),
      };
    } catch {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }
}
