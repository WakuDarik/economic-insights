import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetYearlyAnalyticsQuery } from '../impl/get-yearly-analytics.query';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BuffettIndicator } from '../../../buffett-indicator/entities/buffett-indicator.entity';
import { MutualInvestment } from '../../../mutual-investment/entities/mutual-investment.entity';
import { CentralBankEmission } from '../../../central-bank-emission/entities/emission.entity';

@QueryHandler(GetYearlyAnalyticsQuery)
export class GetYearlyAnalyticsHandler implements IQueryHandler<GetYearlyAnalyticsQuery> {
  constructor(
    @InjectRepository(BuffettIndicator)
    private readonly buffettRepo: Repository<BuffettIndicator>,
    @InjectRepository(MutualInvestment)
    private readonly investmentRepo: Repository<MutualInvestment>,
    @InjectRepository(CentralBankEmission)
    private readonly emissionRepo: Repository<CentralBankEmission>,
  ) {}

  async execute(query: GetYearlyAnalyticsQuery) {
    const year = query.year;

    const [buffett, emissions, investments] = await Promise.all([
      this.buffettRepo.find({ where: { year } }),
      this.emissionRepo.find({ where: { year } }),
      this.investmentRepo.find({ where: { year } }),
    ]);

    return {
      year,
      buffett: buffett.map(({ country, indicatorValue }) => ({ country, indicator: Number(indicatorValue) })),
      emissions: emissions.map(({ country, emissionAmount }) => ({ country, emissionAmount: Number(emissionAmount) })),
      investments: investments.map(({ fromCountry, toCountry, investmentAmount }) => ({
        fromCountry,
        toCountry,
        investmentAmount: Number(investmentAmount),
      })),
    };
  }
}
