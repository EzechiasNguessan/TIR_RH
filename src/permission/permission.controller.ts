import {
  Controller,
  Post,
  Get,
  Param,
  Patch,
  Delete,
  Body,
} from '@nestjs/common';
import { PermissionService } from './permission.service';
import { CreatePermissionDto } from 'src/permission/dto/create-permission.dto/create-permission.dto';
import { UpdatePermissionDto } from 'src/permission/dto/update-permission.dto/update-permission.dto';

@Controller('permission')
export class PermissionController {
  constructor(private readonly service: PermissionService) {}

  @Post()
  create(@Body() dto: CreatePermissionDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePermissionDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
