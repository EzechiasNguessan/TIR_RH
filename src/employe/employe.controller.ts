import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmployeService } from './employe.service';
import { CreateEmployeDto } from 'src/employe/dto/create-employe.dto/create-employe.dto';
import { UpdateEmployeDto } from 'src/employe/dto/update-employe.dto/update-employe.dto';
@Controller('employe')
export class EmployeController {
  constructor(private readonly employeService: EmployeService) {}

  @Post()
  create(@Body() dto: CreateEmployeDto) {
    return this.employeService.create(dto);
  }

  @Get()
  findAll() {
    return this.employeService.findAll();
  }

  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.employeService.findOne(email);
  }

  @Patch(':email')
  update(@Param('email') email: string, @Body() dto: UpdateEmployeDto) {
    return this.employeService.update(email, dto);
  }

  @Delete(':email')
  remove(@Param('email') email: string) {
    return this.employeService.remove(email);
  }
}
