import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeService } from './employe.service';
import { EmployeController } from './employe.controller';
import { Employe } from './entities/employe.entity';
import { Departement } from '../departement/entities/departement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employe, Departement])],
  exports: [EmployeService],
  controllers: [EmployeController],
  providers: [EmployeService],
})
export class EmployeModule {}
