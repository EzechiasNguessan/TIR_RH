import { IsDateString, IsInt, IsString } from 'class-validator';

export class CreatePermissionDto {
  @IsDateString()
  date_debut: string;

  @IsDateString()
  date_fin: string;

  @IsInt()
  duree: number;

  @IsString()
  motif: string;
}
