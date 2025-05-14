import { IsEnum, IsNumber, Max, Min } from 'class-validator';
import { Country } from '../enums/country.enum';

export class CreateBuffettDto {
  @IsEnum(Country)
  country: Country;

  @IsNumber()
  @Min(1990)
  @Max(2023)
  year: number;

  @IsNumber()
  marketCap: number;

  @IsNumber()
  gdp: number;
}
