import { Country } from "../../enums/country.enum";

export class CreateBuffettCommand {
  constructor(
    public readonly country: Country,
    public readonly year: number,
    public readonly marketCap: number,
    public readonly gdp: number,
  ) {}
}
