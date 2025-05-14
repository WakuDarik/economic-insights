import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Country } from '../../buffett-indicator/enums/country.enum';

@Entity()
export class CentralBankEmission {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: Country })
  country: Country;

  @Column()
  year: number;

  @Column('decimal', { precision: 18, scale: 2 })
  emissionAmount: number;
}
