import { Test, TestingModule } from '@nestjs/testing';
import { ReportExpenseController } from './report-expense.controller';
import { ReportExpenseService } from './report-expense.service';

describe('ReportExpenseController', () => {
  let controller: ReportExpenseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportExpenseController],
      providers: [ReportExpenseService],
    }).compile();

    controller = module.get<ReportExpenseController>(ReportExpenseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
