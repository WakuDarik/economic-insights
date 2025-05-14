import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateMutualCommand } from './commands/impl/create-mutual.command';
import { Country } from '../buffett-indicator/enums/country.enum';
import { CreateMutualInvestmentDto } from './dto/create-mutual.dto';
import { FilterMutualDto } from './dto/filter-mutual.dto';
import { GetMutualByFilterQuery } from './queries/impl/get-by-filter.query';

@Controller('investments')
export class MutualInvestmentController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly comandBus: CommandBus,
  ) {}

  @Post()
  async create(@Body() dto: CreateMutualInvestmentDto) {
    const { fromCountry, toCountry, year, investmentAmount } = dto;
    // Validate the countries
    return this.comandBus.execute(
      new CreateMutualCommand(fromCountry, toCountry, year, investmentAmount),
    );
  }

  @Get()
  async getByFilter(@Query() query: FilterMutualDto) {
    const { fromCountry, toCountry, year } = query;
    
    return this.queryBus.execute(
      new GetMutualByFilterQuery(fromCountry, toCountry, year),
    );
  }
}
