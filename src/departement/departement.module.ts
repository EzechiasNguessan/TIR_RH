import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartementService } from './departement.service';
import { DepartementController } from './departement.controller';
import { Departement } from './entities/departement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Departement])],
  controllers: [DepartementController],
  providers: [DepartementService],
  exports: [DepartementService],
})
export class DepartementModule {}
