import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Permission } from 'src/permission/entities/permission.entity';
import { CreatePermissionDto } from 'src/permission/dto/create-permission.dto';
import { UpdatePermissionDto } from 'src/permission/dto/update-permission.dto';

@Injectable()
export class PermissionService {
  constructor(
    @InjectRepository(Permission)
    private readonly repo: Repository<Permission>,
  ) {}

  create(dto: CreatePermissionDto) {
    const permission = this.repo.create(dto);
    return this.repo.save(permission);
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const permission = await this.repo.findOneBy({ id });
    if (!permission) throw new NotFoundException('Permission not found');
    return permission;
  }

  async update(id: number, dto: UpdatePermissionDto) {
    const permission = await this.findOne(id);
    Object.assign(permission, dto);
    return this.repo.save(permission);
  }

  async remove(id: number) {
    const permission = await this.findOne(id);
    return this.repo.remove(permission);
  }
}
