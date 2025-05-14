import { Country } from '../../buffett-indicator/enums/country.enum';
import { IsEnum } from 'class-validator';

export class InvestmentsChartDto {
  @IsEnum(Country)
  fromCountry: Country;

  @IsEnum(Country)
  toCountry: Country;
}
