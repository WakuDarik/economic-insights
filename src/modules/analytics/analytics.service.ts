import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CentralBankEmission } from '../central-bank-emission/entities/emission.entity';
import { Repository, Between, FindOptionsWhere } from 'typeorm';
import { Country } from '../buffett-indicator/enums/country.enum';

@Injectable()
export class AnalyticsService {
  constructor(
    @InjectRepository(CentralBankEmission)
    private readonly repo: Repository<CentralBankEmission>,
  ) {}

  async getTotalEmission(country: Country, from: number, to: number) {
    const where: FindOptionsWhere<CentralBankEmission> = {
      country,
      year: Between(from, to),
    };

    const result = await this.repo
      .createQueryBuilder('e')
      .select('SUM(e.emissionAmount)', 'total')
      .where(where)
      .getRawOne();

    return {
      country,
      from,
      to,
      total: parseFloat(result.total ?? 0),
    };
  }
}
