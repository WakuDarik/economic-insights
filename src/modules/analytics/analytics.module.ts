import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AnalyticsService } from './analytics.service';
import { AnalyticsController } from './analytics.controller';
import { GetEmissionTotalHandler } from './queries/handlers/get-emission-total.handler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CentralBankEmission } from '../central-bank-emission/entities/emission.entity';
import { GetYearlyAnalyticsHandler } from './queries/handlers/get-yearly-analytics.handler';
import { BuffettIndicator } from '../buffett-indicator/entities/buffett-indicator.entity';
import { MutualInvestment } from '../mutual-investment/entities/mutual-investment.entity';
import { GetBuffettChartHandler } from './queries/handlers/get-buffett-chart.handler';
import { GetEmissionsChartHandler } from './queries/handlers/get-emissions-chart.handler';
import { GetInvestmentsChartHandler } from './queries/handlers/get-investments-chart.handler';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CentralBankEmission,
      BuffettIndicator,
      MutualInvestment,
    ]),
    CqrsModule,
  ],
  controllers: [AnalyticsController],
  providers: [
    AnalyticsService,
    GetEmissionTotalHandler,
    GetYearlyAnalyticsHandler,
    GetBuffettChartHandler,
    GetEmissionsChartHandler,
    GetInvestmentsChartHandler,
  ],
})
export class AnalyticsModule {}
