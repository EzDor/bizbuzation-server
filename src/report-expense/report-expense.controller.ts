import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReportExpenseDto } from '@src/dto/report-expense/report-expense.dto';
import { ReportExpenseService } from '@src/report-expense/report-expense.service';

@Controller('report-expense')
export class ReportExpenseController {
  constructor(private readonly reportExpenseService: ReportExpenseService) {}

  @Post()
  create(@Body() reportExpenseDto: ReportExpenseDto) {
    return this.reportExpenseService.create(reportExpenseDto);
  }

  @Get()
  findAll() {
    return this.reportExpenseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reportExpenseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() reportExpenseDto: ReportExpenseDto) {
    return this.reportExpenseService.update(+id, reportExpenseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reportExpenseService.remove(+id);
  }
}
