import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { ReportExpenseModule } from './report-expense/report-expense.module';

@Module({
  imports: [CoreModule, ReportExpenseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
