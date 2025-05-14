import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetBuffettChartQuery } from '../impl/get-buffett-chart.query';
import { InjectRepository } from '@nestjs/typeorm';
import { BuffettIndicator } from '../../../buffett-indicator/entities/buffett-indicator.entity';
import { Repository } from 'typeorm';

@QueryHandler(GetBuffettChartQuery)
export class GetBuffettChartHandler implements IQueryHandler<GetBuffettChartQuery> {
  constructor(
    @InjectRepository(BuffettIndicator)
    private readonly repo: Repository<BuffettIndicator>,
  ) {}

  async execute(query: GetBuffettChartQuery) {
    const records = await this.repo.find({
      where: { country: query.country },
      order: { year: 'ASC' },
    });

    return {
      country: query.country,
      data: records.map(r => ({
        year: r.year,
        indicator: Number(r.indicatorValue),
      })),
    };
  }
}
