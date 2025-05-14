import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetEmissionTotalQuery } from '../impl/get-emission-total.query';
import { AnalyticsService } from '../../analytics.service';

@QueryHandler(GetEmissionTotalQuery)
export class GetEmissionTotalHandler implements IQueryHandler<GetEmissionTotalQuery> {
  constructor(private readonly service: AnalyticsService) {}

  async execute(query: GetEmissionTotalQuery) {
    return this.service.getTotalEmission(query.country, query.from, query.to);
  }
}
