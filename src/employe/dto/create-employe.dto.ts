import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsBoolean,
  IsDateString,
  MinLength,
  MaxLength,
} from 'class-validator';

export class CreateEmployeDto {
  @IsOptional()
  @IsBoolean()
  isSuperieur?: boolean;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  nom: string;

  @IsString()
  @IsNotEmpty()
  prenom: string;

  @IsString()
  @MinLength(6) // Minimum 6 caractères pour plus de sécurité
  @MaxLength(15) // Maximum 15 caractères
  @IsNotEmpty()
  password: string;

  @IsOptional()
  @IsString()
  poste?: string;

  @IsOptional()
  @IsDateString()
  date_embauche?: Date;

  @IsOptional()
  @IsEmail()
  superieur_email?: string;
}
