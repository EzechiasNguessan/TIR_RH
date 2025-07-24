import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { PresenceService } from './presence.service';
import { CreatePresenceDto } from 'src/presence/dto/create-presence.dto';
import { UpdatePresenceDto } from 'src/presence/dto/update-presence.dto';

@Controller('presence')
export class PresenceController {
  constructor(private readonly presenceService: PresenceService) {}

  @Post()
  create(@Body() dto: CreatePresenceDto) {
    return this.presenceService.create(dto);
  }

  @Get()
  findAll() {
    return this.presenceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.presenceService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdatePresenceDto) {
    return this.presenceService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.presenceService.remove(id);
  }
}
