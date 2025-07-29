import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employe } from './entities/employe.entity';
import { Departement } from '../departement/entities/departement.entity';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { UpdateEmployeDto } from './dto/update-employe.dto';

@Injectable()
export class EmployeService {
  constructor(
    @InjectRepository(Employe)
    private readonly employeRepository: Repository<Employe>,

    @InjectRepository(Departement)
    private readonly departementRepository: Repository<Departement>,
  ) {}

  /** Création d'un employé */
  async create(dto: CreateEmployeDto) {
    return await this.employeRepository.save(dto);
  }

  /** Récupération de tous les employés */
  findAll() {
    return this.employeRepository.find({ relations: ['departement'] });
  }

  /** Récupération d'un employé par email */
  async findOne(email: string) {
    const employe = await this.employeRepository.findOne({
      where: { email },
      relations: ['departement'],
    });
    if (!employe)
      throw new NotFoundException(`Employé avec email ${email} introuvable`);
    return employe;
  }

  /** Mise à jour d'un employé */
  async update(email: string, dto: UpdateEmployeDto) {
    const employe = await this.findOne(email);
    Object.assign(employe, dto);
    return await this.employeRepository.save(employe);
  }

  /** Suppression d'un employé */
  async remove(email: string) {
    const employe = await this.findOne(email);
    await this.employeRepository.remove(employe);
    return { message: 'Employé supprimé avec succès' };
  }

  /** Assigner un département à un employé */
  async assignDepartement(email: string, departementId: number) {
    const employe = await this.findOne(email);
    const departement = await this.departementRepository.findOne({
      where: { id: departementId },
    });

    if (!departement) throw new NotFoundException('Département non trouvé');

    employe.departement = departement;
    return this.employeRepository.save(employe);
  }
}
