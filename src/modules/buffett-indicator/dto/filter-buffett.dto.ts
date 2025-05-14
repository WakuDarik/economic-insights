import { IsEnum, IsOptional, IsInt, Min, Max } from 'class-validator';
import { Country } from '../enums/country.enum';
import { Type } from 'class-transformer';

export class FilterBuffettDto {
  @IsOptional()
  @IsEnum(Country)
  country?: Country;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1990)
  @Max(2023)
  year?: number;
}
