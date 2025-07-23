import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employe } from 'src/employe/entities/employe.entity/employe.entity';
import { CreateEmployeDto } from 'src/employe/dto/create-employe.dto/create-employe.dto';
import { UpdateEmployeDto } from 'src/employe/dto/update-employe.dto/update-employe.dto';

@Injectable()
export class EmployeService {
  constructor(
    @InjectRepository(Employe)
    private employeRepository: Repository<Employe>,
  ) {}

  create(dto: CreateEmployeDto) {
    return this.employeRepository.save(dto);
  }

  findAll() {
    return this.employeRepository.find();
  }

  findOne(email: string) {
    return this.employeRepository.findOneBy({ email });
  }

  update(email: string, dto: UpdateEmployeDto) {
    return this.employeRepository.update({ email }, dto);
  }

  remove(email: string) {
    return this.employeRepository.delete({ email });
  }
}
