import { Module } from '@nestjs/common';
import { MutualInvestmentController } from './mutual.controller';
import { MutualService } from './mutual.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MutualInvestment } from './entities/mutual-investment.entity';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateMutualHandler } from './commands/handlers/create-mutual.handler';
import { GetMutualByFilterHandler } from './queries/handlers/get-by-filter.handler';

@Module({
  imports: [TypeOrmModule.forFeature([MutualInvestment]), CqrsModule], // Add your entities here
  controllers: [MutualInvestmentController],
  providers: [MutualService, CreateMutualHandler, GetMutualByFilterHandler],
})
export class MutualInvestmentModule {}
