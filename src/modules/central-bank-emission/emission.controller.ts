import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateEmissionDto } from './dto/create-emission.dto';
import { CreateEmissionCommand } from './commands/impl/create-emission.command';
import { FilterEmissionDto } from './dto/filter-emission.dto';
import { GetEmissionByFilterQuery } from './queries/impl/get-by-filter.query';

@Controller('emissions')
export class EmissionController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async create(@Body() dto: CreateEmissionDto) {
    const { country, year, emissionAmount } = dto;
    return this.commandBus.execute(
      new CreateEmissionCommand(country, year, emissionAmount),
    );
  }

  @Get()
  async getByFilter(@Query() query: FilterEmissionDto) {
    return this.queryBus.execute(
      new GetEmissionByFilterQuery(query.country, query.year),
    );
  }
}
