import { IsEmail, IsOptional, IsString, Length } from 'class-validator';

export class CreateUsereDto {
  @IsString()
  @Length(1, 100)
  nombre: string;

  @IsEmail()
  @Length(1, 150)
  email: string;

  @IsOptional()
  @IsString()
  @Length(1, 20)
  telefono?: string;

  @IsOptional()
  @IsString()
  direccion?: string;

  @IsString()
  contrasenia: string
}