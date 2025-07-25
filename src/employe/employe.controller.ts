import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  Param,
  UseGuards,
} from '@nestjs/common';
import { EmployeService } from './employe.service';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { UpdateEmployeDto } from './dto/update-employe.dto';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';
import { RolesGuard } from '../common/guards/roles.guard';

@Controller('employe')
@UseGuards(RolesGuard)
export class EmployeController {
  constructor(private readonly employeService: EmployeService) {}

  @Post('employe')
  @Roles(Role.RH)
  create(@Body() dto: CreateEmployeDto) {
    return this.employeService.create(dto);
  }

  @Get()
  @Roles(Role.RH)
  findAll() {
    return this.employeService.findAll();
  }

  @Get(':email')
  @Roles(Role.RH)
  findOne(@Param('email') email: string) {
    return this.employeService.findOne(email);
  }

  @Patch(':email')
  @Roles(Role.RH)
  update(@Param('email') email: string, @Body() dto: UpdateEmployeDto) {
    return this.employeService.update(email, dto);
  }

  @Delete(':email')
  @Roles(Role.RH)
  remove(@Param('email') email: string) {
    return this.employeService.remove(email);
  }
}
