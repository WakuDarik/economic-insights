import { Country } from '../../../buffett-indicator/enums/country.enum';

export class GetEmissionByFilterQuery {
  constructor(
    public readonly country?: Country,
    public readonly year?: number,
  ) {}
}
