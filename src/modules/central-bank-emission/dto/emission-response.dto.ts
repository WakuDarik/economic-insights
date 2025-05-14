import { Country } from '../../buffett-indicator/enums/country.enum';

export class EmissionResponseDto {
  country: Country;
  year: number;
  emissionAmount: number;
}
