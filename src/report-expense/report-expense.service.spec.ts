import { Test, TestingModule } from '@nestjs/testing';
import { ReportExpenseService } from './report-expense.service';

describe('ReportExpenseService', () => {
  let service: ReportExpenseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReportExpenseService],
    }).compile();

    service = module.get<ReportExpenseService>(ReportExpenseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
