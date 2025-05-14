import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CentralBankEmission } from './entities/emission.entity';
import { FindOptionsWhere, Repository } from 'typeorm';
import { Country } from '../buffett-indicator/enums/country.enum';
import { GetEmissionByFilterQuery } from './queries/impl/get-by-filter.query';

@Injectable()
export class EmissionService {
  constructor(
    @InjectRepository(CentralBankEmission)
    private readonly repo: Repository<CentralBankEmission>,
  ) {}

  async create(country: Country, year: number, emissionAmount: number) {
    const entity = this.repo.create({
      country,
      year,
      emissionAmount,
    });

    return this.repo.save(entity);
  }

  async getByFilter(query: GetEmissionByFilterQuery) {
    const where: FindOptionsWhere<any> = {};
    if (query.country) where.country = query.country;
    if (query.year) where.year = query.year;

    return this.repo.find({
      where,
      order: { year: 'ASC' },
    });
  }
}
