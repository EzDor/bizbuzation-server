import { Injectable } from '@nestjs/common';
import { ReportExpenseDto } from '@src/report-expense/dto/report-expense.dto';

@Injectable()
export class ReportExpenseService {
  create(reportExpenseDto: ReportExpenseDto) {
    return 'This action adds a new reportExpense';
  }

  findAll() {
    return `This action returns all reportExpense`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reportExpense`;
  }

  update(id: number, reportExpenseDto: ReportExpenseDto) {
    return `This action updates a #${id} reportExpense`;
  }

  remove(id: number) {
    return `This action removes a #${id} reportExpense`;
  }
}
