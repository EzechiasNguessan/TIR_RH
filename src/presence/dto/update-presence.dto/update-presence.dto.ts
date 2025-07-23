import { IsDateString, IsOptional, IsString } from 'class-validator';

export class UpdatePresenceDto {
  @IsOptional()
  @IsDateString()
  date_heure?: string;

  @IsOptional()
  @IsString()
  localisation?: string;
}
