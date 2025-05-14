import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetMutualByFilterQuery } from '../impl/get-by-filter.query';
import { MutualService } from '../../mutual.service';

@QueryHandler(GetMutualByFilterQuery)
export class GetMutualByFilterHandler
  implements IQueryHandler<GetMutualByFilterQuery>
{
  constructor(private readonly service: MutualService) {}

  async execute(
    query: GetMutualByFilterQuery,
  ): Promise<GetMutualByFilterQuery[]> {
    const { fromCountry, toCountry, year } = query;
    return this.service.getByFilter(fromCountry, toCountry, year);
  }
}
