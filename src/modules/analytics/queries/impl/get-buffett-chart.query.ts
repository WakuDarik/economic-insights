import { Country } from '../../../buffett-indicator/enums/country.enum';

export class GetBuffettChartQuery {
  constructor(public readonly country: Country) {}
}
