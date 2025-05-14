import { Country } from '../../../buffett-indicator/enums/country.enum';

export class CreateEmissionCommand {
  constructor(
    public readonly country: Country,
    public readonly year: number,
    public readonly emissionAmount: number,
  ) {}
}
