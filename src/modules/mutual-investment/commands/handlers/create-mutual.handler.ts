import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateMutualCommand } from '../impl/create-mutual.command';
import { MutualService } from '../../mutual.service';

@CommandHandler(CreateMutualCommand)
export class CreateMutualHandler implements ICommandHandler<CreateMutualCommand> {
  constructor(private readonly service: MutualService) {}

  async execute(command: CreateMutualCommand) {
    const { fromCountry, toCountry, year, investmentAmount } = command;
    return this.service.create(fromCountry, toCountry, year, investmentAmount);
  }
}
