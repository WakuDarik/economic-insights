import { Country } from "../enums/country.enum";

export class BuffettResponseDto {
  country: Country;
  year: number;
  marketCap: number;
  gdp: number;
  indicatorValue: number;
}
