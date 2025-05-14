import { Country } from 'src/modules/buffett-indicator/enums/country.enum';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class MutualInvestment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: Country })
  fromCountry: Country;

  @Column({ type: 'enum', enum: Country })
  toCountry: Country;

  @Column()
  year: number;

  @Column('decimal', { precision: 18, scale: 2 })
  investmentAmount: number;
}
