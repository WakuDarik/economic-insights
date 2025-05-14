import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MutualInvestment } from './entities/mutual-investment.entity';
import { FindOptionsWhere, Repository } from 'typeorm';
import { Country } from '../buffett-indicator/enums/country.enum';

@Injectable()
export class MutualService {
  constructor(
    @InjectRepository(MutualInvestment)
    private readonly repo: Repository<MutualInvestment>,
  ) {}

  async create(
    fromCountry: Country,
    toCountry: Country,
    year: number,
    investmentAmount: number,
  ) {
    const entity = this.repo.create({
      fromCountry,
      toCountry,
      year,
      investmentAmount,
    });

    return this.repo.save(entity);
  }

  // getByFilter
  async getByFilter(
    fromCountry?: Country,
    toCountry?: Country,
    year?: number,
  ): Promise<MutualInvestment[]> {
    const where: FindOptionsWhere<any> = {};
    
    if (fromCountry) where.fromCountry = fromCountry;
    if (toCountry) where.toCountry = toCountry;
    if (year) where.year = year;

    return this.repo.find({
      where,
      order: { year: 'ASC' },
    });
  }
}
