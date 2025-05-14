import { Country } from '../../../buffett-indicator/enums/country.enum';

export class GetMutualByFilterQuery {
  constructor(
    public readonly fromCountry?: Country,
    public readonly toCountry?: Country,
    public readonly year?: number,
  ) {}
}