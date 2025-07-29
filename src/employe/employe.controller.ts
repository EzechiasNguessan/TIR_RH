// src/employe/employe.controller.ts
import {
  Controller,
  Post,
  Get,
  Patch,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { EmployeService } from './employe.service';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { UpdateEmployeDto } from './dto/update-employe.dto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';

@Controller('employe')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class EmployeController {
  constructor(private readonly employeService: EmployeService) {}

  @Post()
  @Roles('ADMIN') // Seul ADMIN peut créer un employé
  create(@Body() dto: CreateEmployeDto) {
    return this.employeService.create(dto);
  }

  @Get()
  @Roles('ADMIN', 'RH') // ADMIN et RH peuvent lister
  findAll() {
    return this.employeService.findAll();
  }

  @Get(':email')
  @Roles('ADMIN', 'RH', 'EMPLOYE') // autorisé pour tous sauf visiteurs
  findOne(@Param('email') email: string) {
    return this.employeService.findOne(email);
  }

  @Patch(':email')
  @Roles('ADMIN', 'RH')
  update(@Param('email') email: string, @Body() dto: UpdateEmployeDto) {
    return this.employeService.update(email, dto);
  }

  /** ✅ Nouvelle route pour assigner un département à un employé */
  @Patch(':email/departement/:departementId')
  @Roles('ADMIN', 'RH')
  assignDepartement(
    @Param('email') email: string,
    @Param('departementId') departementId: number,
  ) {
    return this.employeService.assignDepartement(email, departementId);
  }
}
