import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateBuffettDto } from './dto/create-buffett.dto';
import { CreateBuffettCommand } from './commands/impl/create-buffett.command';
import { Country } from './enums/country.enum';
import { BuffettIndicator } from './entities/buffett-indicator.entity';
import { GetByYearQuery } from './queries/impl/get-by-country-year.query';
import { GetByCountryQuery } from './queries/impl/get-by-country.query';
import { FilterBuffettDto } from './dto/filter-buffett.dto';
import { GetBuffettByFilterQuery } from './queries/impl/get-by-filter.query';

@Controller('buffett')
export class BuffettController {
  constructor(
    private readonly comandBus: CommandBus,
    private readonly queryBus: QueryBus, // Assuming you have a query bus for handling queries
  ) {}

  @Post()
  async create(@Body() createBuffettDto: CreateBuffettDto) {
    const { country, year, marketCap, gdp } = createBuffettDto;

    return this.comandBus.execute(
      new CreateBuffettCommand(country, year, marketCap, gdp),
    );
  }

  @Get(':country')
  async getByCountry(
    @Param('country') country: Country,
  ): Promise<BuffettIndicator[]> {
    return this.queryBus.execute(new GetByCountryQuery(country));
  }

  @Get(':country/:year')
  async getByYear(
    @Param('country') country: Country,
    @Param('year') year: number,
  ): Promise<BuffettIndicator[]> {
    return this.queryBus.execute(new GetByYearQuery(country, year));
  }

  @Get()
  async getByFilter(@Query() query: FilterBuffettDto) {
    return this.queryBus.execute(
      new GetBuffettByFilterQuery(query.country, query.year),
    );
  }
}
