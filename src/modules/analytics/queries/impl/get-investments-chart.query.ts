import { Country } from '../../../buffett-indicator/enums/country.enum';

export class GetInvestmentsChartQuery {
  constructor(
    public readonly fromCountry: Country,
    public readonly toCountry: Country,
  ) {}
}
