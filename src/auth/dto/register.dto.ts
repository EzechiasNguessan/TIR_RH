import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  nom: string;

  @IsBoolean()
  isSuperieur: boolean;

  @IsString()
  @IsNotEmpty()
  prenom: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  poste?: string;
}
