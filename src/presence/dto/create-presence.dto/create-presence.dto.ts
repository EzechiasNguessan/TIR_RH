import { IsDateString, IsEmail, IsOptional, IsString } from 'class-validator';

export class CreatePresenceDto {
  @IsDateString()
  date_heure: string;

  @IsEmail()
  employe_email: string;

  @IsOptional()
  @IsString()
  localisation?: string;
}
