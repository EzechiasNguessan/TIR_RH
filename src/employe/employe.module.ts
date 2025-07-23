import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employe } from 'src/employe/entities/employe.entity/employe.entity';
import { EmployeService } from './employe.service';
import { EmployeController } from './employe.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Employe])],
  controllers: [EmployeController],
  providers: [EmployeService],
})
export class EmployeModule {}
