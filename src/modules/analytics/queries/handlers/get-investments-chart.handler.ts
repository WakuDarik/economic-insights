import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetInvestmentsChartQuery } from '../impl/get-investments-chart.query';
import { InjectRepository } from '@nestjs/typeorm';
import { MutualInvestment } from '../../../mutual-investment/entities/mutual-investment.entity';
import { Repository } from 'typeorm';

@QueryHandler(GetInvestmentsChartQuery)
export class GetInvestmentsChartHandler implements IQueryHandler<GetInvestmentsChartQuery> {
  constructor(
    @InjectRepository(MutualInvestment)
    private readonly repo: Repository<MutualInvestment>,
  ) {}

  async execute(query: GetInvestmentsChartQuery) {
    const records = await this.repo.find({
      where: {
        fromCountry: query.fromCountry,
        toCountry: query.toCountry,
      },
      order: { year: 'ASC' },
    });

    return {
      fromCountry: query.fromCountry,
      toCountry: query.toCountry,
      data: records.map(r => ({
        year: r.year,
        investmentAmount: Number(r.investmentAmount),
      })),
    };
  }
}
