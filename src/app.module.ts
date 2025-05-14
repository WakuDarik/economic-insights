import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { BuffettIndicatorModule } from './modules/buffett-indicator/buffett.module';
import { MutualInvestmentModule } from './modules/mutual-investment/mutual.module';
import { EmissionModule } from './modules/central-bank-emission/emission.module';
import { AnalyticsModule } from './modules/analytics/analytics.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT
        ? Number(process.env.POSTGRES_PORT)
        : 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      autoLoadEntities: true,
      synchronize: true, // у проді краще false
    }),
    BuffettIndicatorModule,
    MutualInvestmentModule,
    EmissionModule,
    AnalyticsModule
  ],
})
export class AppModule {}
