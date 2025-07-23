import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Presence } from './entities/presence.entity/presence.entity';
import { PresenceService } from './presence.service';
import { PresenceController } from './presence.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Presence])], // ✅ indispensable
  providers: [PresenceService],
  controllers: [PresenceController],
  exports: [TypeOrmModule], // optionnel mais utile
})
export class PresenceModule {}
