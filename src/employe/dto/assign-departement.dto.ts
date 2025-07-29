// src/employe/dto/assign-departement.dto.ts
import { IsNumber } from 'class-validator';

export class AssignDepartementDto {
  @IsNumber()
  departementId: number;
}
