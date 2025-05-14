import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuffettIndicator } from './entities/buffett-indicator.entity';
import { CqrsModule } from '@nestjs/cqrs';
import { BuffettController } from './buffett.controller';
import { BuffettService } from './buffett.service';
import { CreateBuffettHandler } from './commands/handlers/create-buffett.handler';
import { GetByYearHandler } from './queries/handlers/get-by-year.handler';
import { GetByCountryHandler } from './queries/handlers/get-by-country.handler';
import { GetBuffettByFilterHandler } from './queries/handlers/get-by-filter.handler';

@Module({
  imports: [TypeOrmModule.forFeature([BuffettIndicator]), CqrsModule],
  controllers: [BuffettController],
  providers: [
    BuffettService,
    CreateBuffettHandler,
    GetByYearHandler,
    GetByCountryHandler,
    GetBuffettByFilterHandler,
  ],
})
export class BuffettIndicatorModule {}
