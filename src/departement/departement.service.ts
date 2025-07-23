import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Departement } from './entities/departement.entity';
import { CreateDepartementDto } from './dto/create-departement.dto';
import { UpdateDepartementDto } from './dto/update-departement.dto';

@Injectable()
export class DepartementService {
  constructor(
    @InjectRepository(Departement)
    private departementRepository: Repository<Departement>,
  ) {}

  create(dto: CreateDepartementDto) {
    const departement = this.departementRepository.create(dto);
    return this.departementRepository.save(departement);
  }

  findAll() {
    return this.departementRepository.find({ relations: ['employes'] });
  }

  async findOne(id: number) {
    const departement = await this.departementRepository.findOne({
      where: { id },
      relations: ['employes'],
    });
    if (!departement) throw new NotFoundException('Département non trouvé');
    return departement;
  }

  async update(id: number, dto: UpdateDepartementDto) {
    const departement = await this.findOne(id);
    Object.assign(departement, dto);
    return this.departementRepository.save(departement);
  }

  async remove(id: number) {
    const departement = await this.findOne(id);
    return this.departementRepository.remove(departement);
  }
}
