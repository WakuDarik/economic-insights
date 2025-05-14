import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetEmissionByFilterQuery } from '../impl/get-by-filter.query';
import { EmissionService } from '../../emission.service';
import { EmissionResponseDto } from '../../dto/emission-response.dto';

@QueryHandler(GetEmissionByFilterQuery)
export class GetEmissionByFilterHandler implements IQueryHandler<GetEmissionByFilterQuery> {
  constructor(private readonly service: EmissionService) {}

  async execute(query: GetEmissionByFilterQuery): Promise<EmissionResponseDto[]> {
    const items = await this.service.getByFilter(query);
    return items.map(({ country, year, emissionAmount }) => ({
      country,
      year,
      emissionAmount,
    }));
  }
}
