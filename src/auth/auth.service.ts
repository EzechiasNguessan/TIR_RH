import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employe } from 'src/employe/entities/employe.entity';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(Employe)
    private readonly employeRepository: Repository<Employe>,
  ) {}

  async login(dto: LoginDto) {
    // Vérifier si l'employé existe
    let employe = await this.employeRepository.findOne({
      where: { email: dto.email },
    });

    // Créer automatiquement s'il n'existe pas
    if (!employe) {
      employe = this.employeRepository.create({ email: dto.email });
      await this.employeRepository.save(employe);
    }

    // Génération du token JWT
    const payload = { email: employe.email, sub: employe.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
