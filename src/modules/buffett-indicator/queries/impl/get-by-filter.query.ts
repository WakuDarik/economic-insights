import { Country } from '../../enums/country.enum';

export class GetBuffettByFilterQuery {
  constructor(
    public readonly country?: Country,
    public readonly year?: number,
  ) {}
}
