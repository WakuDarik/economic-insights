import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BuffettIndicator } from './entities/buffett-indicator.entity';
import { FindOptionsWhere, Repository } from 'typeorm';
import { Country } from './enums/country.enum';
import { BuffettResponseDto } from './dto/buffett-response.dto';
import { GetBuffettByFilterQuery } from './queries/impl/get-by-filter.query';

function toBuffettDto(entity: BuffettIndicator): BuffettResponseDto {
  const { country, year, marketCap, gdp, indicatorValue } = entity;
  return { country, year, marketCap, gdp, indicatorValue };
}

@Injectable()
export class BuffettService {
  constructor(
    @InjectRepository(BuffettIndicator)
    private readonly buffettRepository: Repository<BuffettIndicator>,
  ) {}

  async create(country: Country, year: number, marketCap: number, gdp: number) {
    const indicatorValue = (marketCap / gdp) * 100;
    const buffettIndicator = this.buffettRepository.create({
      country,
      year,
      marketCap,
      gdp,
      indicatorValue,
    });

    return this.buffettRepository.save(buffettIndicator);
  }

  async getByYear(country: Country, year: number): Promise<BuffettIndicator[]> {
    return this.buffettRepository.find({
      where: { country, year },
    });
  }

  async getByCountry(country: Country): Promise<BuffettIndicator[]> {
    return this.buffettRepository.find({
      where: { country },
    });
  }

  async getByFilter(query: GetBuffettByFilterQuery) {
    const where: FindOptionsWhere<any> = {};
    if (query.country) where.country = query.country;
    if (query.year) where.year = query.year;

    return this.buffettRepository.find({
      where,
      order: { year: 'ASC' },
    });
  }
}
