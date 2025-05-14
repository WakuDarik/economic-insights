import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';
import { CentralBankEmission } from './entities/emission.entity';
import { EmissionService } from './emission.service';
import { EmissionController } from './emission.controller';
import { CreateEmissionHandler } from './commands/handlers/create-emission.handler';
import { GetEmissionByFilterHandler } from './queries/handlers/get-by-filter.handler';

@Module({
  imports: [TypeOrmModule.forFeature([CentralBankEmission]), CqrsModule],
  controllers: [EmissionController],
  providers: [
    EmissionService,
    CreateEmissionHandler,
    GetEmissionByFilterHandler,
  ],
})
export class EmissionModule {}
