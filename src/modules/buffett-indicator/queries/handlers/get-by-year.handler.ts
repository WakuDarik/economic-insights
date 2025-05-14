import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetByYearQuery } from '../impl/get-by-country-year.query';
import { BuffettService } from '../../buffett.service';
import { BuffettIndicator } from '../../entities/buffett-indicator.entity';

@QueryHandler(GetByYearQuery)
export class GetByYearHandler implements IQueryHandler<GetByYearQuery> {
  constructor(private readonly buffettService: BuffettService) {}

  async execute(query: GetByYearQuery): Promise<BuffettIndicator[]> {
    const { country, year } = query;

    return this.buffettService.getByYear(country, year);
  }
}

