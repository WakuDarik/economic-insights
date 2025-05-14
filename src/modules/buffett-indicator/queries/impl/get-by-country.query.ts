import { Country } from "../../enums/country.enum";

export class GetByCountryQuery {
  constructor(public readonly country: Country) {}
}
