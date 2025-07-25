import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employe } from './entities/employe.entity';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { UpdateEmployeDto } from './dto/update-employe.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EmployeService {
  constructor(
    @InjectRepository(Employe)
    private readonly employeRepository: Repository<Employe>,
  ) {}

  async create(dto: CreateEmployeDto) {
    const hash = await bcrypt.hash(dto.password, 10);
    const employe = this.employeRepository.create({
      ...dto,
      password: hash,
    });
    return this.employeRepository.save(employe);
  }

  findAll() {
    return this.employeRepository.find();
  }

  async findOne(email: string) {
    return this.employeRepository.findOne({
      where: { email },
      select: ['id', 'email', 'nom', 'prenom', 'password'],
    });
  }

  async update(email: string, dto: UpdateEmployeDto) {
    return this.employeRepository.update({ email }, dto);
  }

  async remove(email: string) {
    return this.employeRepository.delete({ email });
  }
}
