import { Country } from '../../buffett-indicator/enums/country.enum';
import { IsEnum, IsOptional, IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class FilterEmissionDto {
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
