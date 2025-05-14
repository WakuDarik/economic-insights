import { Country } from '../../../buffett-indicator/enums/country.enum';

export class CreateMutualCommand {
  constructor(
    public readonly fromCountry: Country,
    public readonly toCountry: Country,
    public readonly year: number,
    public readonly investmentAmount: number,
  ) {}
}
