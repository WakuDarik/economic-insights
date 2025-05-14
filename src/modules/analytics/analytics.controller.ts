import { Controller, Get, Param, Query } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { EmissionTotalDto } from './dto/emission-total.dto';
import { GetEmissionTotalQuery } from './queries/impl/get-emission-total.query';
import { GetYearlyAnalyticsQuery } from './queries/impl/get-yearly-analytics.query';
import { BuffettChartDto } from './dto/buffett-chart.dto';
import { GetBuffettChartQuery } from './queries/impl/get-buffett-chart.query';
import { EmissionsChartDto } from './dto/emissions-chart.dto';
import { GetEmissionsChartQuery } from './queries/impl/get-emissions-chart.query';
import { InvestmentsChartDto } from './dto/investments-chart.dto';
import { GetInvestmentsChartQuery } from './queries/impl/get-investments-chart.query';

@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get('emission-total')
  async getEmissionTotal(@Query() query: EmissionTotalDto) {
    return this.queryBus.execute(
      new GetEmissionTotalQuery(query.country, query.from, query.to),
    );
  }

  @Get('year/:year')
  async getByYear(@Param('year') year: string) {
    return this.queryBus.execute(new GetYearlyAnalyticsQuery(+year));
  }

  @Get('buffett-chart')
  async getBuffettChart(@Query() query: BuffettChartDto) {
    return this.queryBus.execute(new GetBuffettChartQuery(query.country));
  }

  @Get('emissions-chart')
  async getEmissionsChart(@Query() query: EmissionsChartDto) {
    return this.queryBus.execute(new GetEmissionsChartQuery(query.country));
  }

  @Get('investments-chart')
  async getInvestmentsChart(@Query() query: InvestmentsChartDto) {
    return this.queryBus.execute(
      new GetInvestmentsChartQuery(query.fromCountry, query.toCountry),
    );
  }
}
