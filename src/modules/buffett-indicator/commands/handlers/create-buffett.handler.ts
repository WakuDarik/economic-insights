import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateBuffettCommand } from "../impl/create-buffett.command";
import { BuffettService } from "../../buffett.service";
import { BuffettIndicator } from "../../entities/buffett-indicator.entity";


@CommandHandler(CreateBuffettCommand)
export class CreateBuffettHandler implements ICommandHandler<CreateBuffettCommand> {
  constructor(
    private readonly buffettService: BuffettService,
  ) {}

  async execute(command: CreateBuffettCommand): Promise<BuffettIndicator> {
    const { country, year, marketCap, gdp } = command;

    return this.buffettService.create(country, year, marketCap, gdp);
  }
}