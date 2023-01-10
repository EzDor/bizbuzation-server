import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ReportExpenseEntity } from '@src/dao/entities/report-expense.entity';
import { ReportExpenseController } from './report-expense.controller';
import { ReportExpenseService } from './report-expense.service';

describe('ReportExpenseController', () => {
  let controller: ReportExpenseController;

  const mockValue = {
    id: 1,
    date: new Date(Date.now()),
    amount: Math.random() * 1000,
    account: 'Shared',
    type: 'Food',
    subtype: 'Grocery',
    comment: 'The brothers store',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportExpenseController],
      providers: [
        ReportExpenseService,
        {
          provide: getRepositoryToken(ReportExpenseEntity),
          useValue: { findOneBy: jest.fn().mockResolvedValue(mockValue) },
        },
      ],
    }).compile();

    controller = module.get<ReportExpenseController>(ReportExpenseController);
  });

  it('should be defined', async () => {
    const expected = { ...mockValue };
    const results = await controller.findOne(1);
    expect(results).toStrictEqual(expected);
  });
});
