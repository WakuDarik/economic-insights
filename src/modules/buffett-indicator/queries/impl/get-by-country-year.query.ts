import { Country } from '../../enums/country.enum';

export class GetByYearQuery {
  constructor(
    public readonly country: Country,
    public readonly year: number,
  ) {}
}