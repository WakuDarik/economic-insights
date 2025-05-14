import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetEmissionsChartQuery } from '../impl/get-emissions-chart.query';
import { InjectRepository } from '@nestjs/typeorm';
import { CentralBankEmission } from '../../../central-bank-emission/entities/emission.entity';
import { Repository } from 'typeorm';

@QueryHandler(GetEmissionsChartQuery)
export class GetEmissionsChartHandler implements IQueryHandler<GetEmissionsChartQuery> {
  constructor(
    @InjectRepository(CentralBankEmission)
    private readonly repo: Repository<CentralBankEmission>,
  ) {}

  async execute(query: GetEmissionsChartQuery) {
    const records = await this.repo.find({
      where: { country: query.country },
      order: { year: 'ASC' },
    });

    return {
      country: query.country,
      data: records.map(r => ({
        year: r.year,
        emissionAmount: Number(r.emissionAmount),
      })),
    };
  }
}
