import { Country } from '../../buffett-indicator/enums/country.enum';
import { IsEnum, IsInt, Min, Max, IsNumber } from 'class-validator';

export class CreateEmissionDto {
  @IsEnum(Country)
  country: Country;

  @IsInt()
  @Min(1990)
  @Max(2023)
  year: number;

  @IsNumber()
  emissionAmount: number;
}
