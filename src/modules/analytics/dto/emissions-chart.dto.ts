import { Country } from '../../buffett-indicator/enums/country.enum';
import { IsEnum } from 'class-validator';

export class EmissionsChartDto {
  @IsEnum(Country)
  country: Country;
}
