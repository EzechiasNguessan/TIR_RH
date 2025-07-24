import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateEmployeDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  nom: string;

  @IsString()
  @IsNotEmpty()
  prenom: string;

  @IsOptional()
  @IsString()
  matricule?: string;

  @IsOptional()
  @IsString()
  poste?: string;

  @IsOptional()
  @IsEmail()
  superieur_email?: string;

  @IsOptional()
  date_embauche?: Date;
}
