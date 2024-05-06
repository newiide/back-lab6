import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MinLength, IsOptional } from '@nestjs/class-validator';

export class PartsDto {
  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  text: string;

  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  otp: string;
}