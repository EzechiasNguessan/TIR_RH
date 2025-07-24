import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employe } from 'src/employe/entities/employe.entity';
import { CreateEmployeDto } from 'src/employe/dto/create-employe.dto';
import { UpdateEmployeDto } from 'src/employe/dto/update-employe.dto';

@Injectable()
export class EmployeService {
  constructor(
    @InjectRepository(Employe)
    private employeRepository: Repository<Employe>,
  ) {}

  async create(dto: CreateEmployeDto) {
    return await this.employeRepository.save(dto);
  }

  findAll() {
    return this.employeRepository.find();
  }

  async findOne(email: string) {
    return await this.employeRepository.findOneBy({ email });
  }

  async update(email: string, dto: UpdateEmployeDto) {
    return await this.employeRepository.update({ email }, dto);
  }

  async remove(email: string) {
    return await this.employeRepository.delete({ email });
  }
}
