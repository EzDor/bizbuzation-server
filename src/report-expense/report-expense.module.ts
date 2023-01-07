import { Module } from '@nestjs/common';
import { CoreModule } from '@src/core/core.module';
import { ReportExpenseService } from './report-expense.service';
import { ReportExpenseController } from './report-expense.controller';

@Module({
  controllers: [ReportExpenseController],
  providers: [ReportExpenseService],
})
export class ReportExpenseModule {}
