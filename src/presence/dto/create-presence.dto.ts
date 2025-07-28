import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreatePresenceDto {
  @IsEmail()
  employe_email: string;

  @IsOptional()
  @IsString()
  localisation?: string;
}
