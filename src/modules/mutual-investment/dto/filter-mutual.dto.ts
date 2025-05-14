import { Country } from '../../buffett-indicator/enums/country.enum';
import { IsOptional, IsEnum, IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class FilterMutualDto {
  @IsOptional()
  @IsEnum(Country)
  fromCountry?: Country;

  @IsOptional()
  @IsEnum(Country)
  toCountry?: Country;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1990)
  @Max(2023)
  year?: number;
}
