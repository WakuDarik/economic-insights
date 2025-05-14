import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetByCountryQuery } from '../impl/get-by-country.query';
import { BuffettService } from '../../buffett.service';
import { BuffettIndicator } from '../../entities/buffett-indicator.entity';

@QueryHandler(GetByCountryQuery)
export class GetByCountryHandler implements IQueryHandler<GetByCountryQuery> {
  constructor(private readonly buffettService: BuffettService) {}

  async execute(query: GetByCountryQuery): Promise<BuffettIndicator[]> {
    const { country } = query;

    return this.buffettService.getByCountry(country);
  }
}