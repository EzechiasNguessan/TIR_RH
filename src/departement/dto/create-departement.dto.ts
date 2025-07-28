import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateDepartementDto {
  @IsString()
  @IsNotEmpty()
  nom_departement: string;

  @IsOptional()
  @IsString()
  description_departement?: string;

  @IsString()
  @IsNotEmpty()
  nom_service: string;

  @IsOptional()
  @IsString()
  description_service?: string;

  @IsString()
  @IsNotEmpty()
  nom_unite: string;

  @IsOptional()
  @IsString()
  description_unite?: string;
}
