import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Presence } from 'src/presence/entities/presence.entity/presence.entity';
import { CreatePresenceDto } from 'src/presence/dto/create-presence.dto';
import { UpdatePresenceDto } from 'src/presence/dto/update-presence.dto';
@Injectable()
export class PresenceService {
  constructor(
    @InjectRepository(Presence)
    private presenceRepository: Repository<Presence>,
  ) {}

  async create(dto: CreatePresenceDto) {
    const presence = this.presenceRepository.create(dto);
    return this.presenceRepository.save(presence);
  }

  findAll() {
    return this.presenceRepository.find();
  }

  async findOne(id: number) {
    const presence = await this.presenceRepository.findOneBy({ id });
    if (!presence) throw new NotFoundException('Presence not found');
    return presence;
  }

  async update(id: number, dto: UpdatePresenceDto) {
    const presence = await this.findOne(id);
    Object.assign(presence, dto);
    return this.presenceRepository.save(presence);
  }

  async remove(id: number) {
    const presence = await this.findOne(id);
    return this.presenceRepository.remove(presence);
  }
}
