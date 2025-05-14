import { Country } from '../../../buffett-indicator/enums/country.enum';

export class GetEmissionsChartQuery {
  constructor(public readonly country: Country) {}
}
