import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoreModule } from '@src/core/core.module';
import { ReportExpenseEntity } from '@src/dao/entities/report-expense.entity';
import { ReportExpenseService } from './report-expense.service';
import { ReportExpenseController } from './report-expense.controller';

@Module({
  controllers: [ReportExpenseController],
  providers: [ReportExpenseService],
  imports: [TypeOrmModule.forFeature([ReportExpenseEntity])],
})
export class ReportExpenseModule {}
