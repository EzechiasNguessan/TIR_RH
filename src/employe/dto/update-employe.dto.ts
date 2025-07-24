import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeDto } from 'src/employe/dto/create-employe.dto';

export class UpdateEmployeDto extends PartialType(CreateEmployeDto) {}
