import { Country } from '../../buffett-indicator/enums/country.enum';
import { IsEnum, IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class EmissionTotalDto {
  @IsEnum(Country)
  country: Country;

  @Type(() => Number)
  @IsInt()
  @Min(1990)
  @Max(2023)
  from: number;

  @Type(() => Number)
  @IsInt()
  @Min(1990)
  @Max(2023)
  to: number;
}
