import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetBuffettByFilterQuery } from '../impl/get-by-filter.query';
import { BuffettService } from '../../buffett.service';
import { BuffettResponseDto } from '../../dto/buffett-response.dto';

@QueryHandler(GetBuffettByFilterQuery)
export class GetBuffettByFilterHandler implements IQueryHandler<GetBuffettByFilterQuery> {
  constructor(private readonly service: BuffettService) {}

  async execute(query: GetBuffettByFilterQuery): Promise<BuffettResponseDto[]> {
    return await this.service.getByFilter(query);
  }
}
