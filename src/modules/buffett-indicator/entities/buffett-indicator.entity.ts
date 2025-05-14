import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Country } from '../enums/country.enum';

@Entity()
export class BuffettIndicator {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: Country })
  country: Country;

  @Column()
  year: number;

  @Column('decimal')
  marketCap: number;

  @Column('decimal')
  gdp: number;

  @Column('decimal')
  indicatorValue: number;
}
