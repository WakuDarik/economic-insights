import { Country } from '../../../buffett-indicator/enums/country.enum';

export class GetEmissionTotalQuery {
  constructor(
    public readonly country: Country,
    public readonly from: number,
    public readonly to: number,
  ) {}
}
