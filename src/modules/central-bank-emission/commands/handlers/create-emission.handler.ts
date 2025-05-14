import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateEmissionCommand } from '../impl/create-emission.command';
import { EmissionService } from '../../emission.service';

@CommandHandler(CreateEmissionCommand)
export class CreateEmissionHandler implements ICommandHandler<CreateEmissionCommand> {
  constructor(private readonly service: EmissionService) {}

  async execute(command: CreateEmissionCommand) {
    const { country, year, emissionAmount } = command;
    return this.service.create(country, year, emissionAmount);
  }
}
