import { Country } from '../../buffett-indicator/enums/country.enum';
import { IsEnum, IsNumber, IsInt, Min, Max } from 'class-validator';

export class CreateMutualInvestmentDto {
  @IsEnum(Country)
  fromCountry: Country;

  @IsEnum(Country)
  toCountry: Country;

  @IsInt()
  @Min(1990)
  @Max(2023)
  year: number;

  @IsNumber()
  investmentAmount: number;
}
