import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeService } from './employe.service';
import { EmployeController } from './employe.controller';
import { Employe } from './entities/employe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employe])],
  exports: [EmployeService],
  controllers: [EmployeController],
  providers: [EmployeService],
})
export class EmployeModule {}
