import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ReportExpenseEntity } from '@src/dao/entities/report-expense.entity';
import { ReportExpenseDto } from '@src/dto/report-expense/report-expense.dto';
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

  const createMockValue = {
    date: new Date(Date.now()),
    amount: Math.random() * 1000,
    account: 'Shared',
    type: 'Food',
    subtype: 'Grocery',
    comment: 'The brothers store',
  };

  const updateMockValue = {
    date: new Date(Date.now()),
    amount: Math.random() * 1000,
    account: 'Shared',
    type: 'Food',
    subtype: 'Grocery',
    comment: 'The brothers store',
  };

  const findAllMockValue = [mockValue, { ...mockValue, id: 2 }];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportExpenseController],
      providers: [
        ReportExpenseService,
        {
          provide: getRepositoryToken(ReportExpenseEntity),
          useValue: {
            findOneBy: jest.fn().mockResolvedValue(mockValue),
            save: jest.fn().mockResolvedValue(mockValue),
            update: jest.fn().mockResolvedValue(updateMockValue),
            find: jest.fn().mockResolvedValue(findAllMockValue),
            delete: jest.fn().mockResolvedValue(mockValue),
          },
        },
      ],
    }).compile();

    controller = module.get<ReportExpenseController>(ReportExpenseController);
  });

  describe('findOne', () => {
    it('should be defined', async () => {
      expect(controller.findOne).toBeDefined();
    });

    it('should return one report expense by id', async () => {
      const expected = { ...mockValue };
      const results = await controller.findOne(1);
      expect(results).toStrictEqual(expected);
    });
  });

  describe('findAll', () => {
    it('should be defined', async () => {
      expect(controller.findAll).toBeDefined();
    });

    it('should return all report expense', async () => {
      const expected = [{ ...mockValue }, { ...mockValue, id: 2 }];
      const results = await controller.findAll();
      expect(results).toStrictEqual(expected);
    });
  });
  describe('create', () => {
    it('should be defined', async () => {
      expect(controller.create).toBeDefined();
    });
    it('should create a report expense', async () => {
      const expected = { ...mockValue };
      const result = await controller.create(createMockValue);
      expect(result).toStrictEqual(expected);
    });
  });
  describe('update', () => {
    it('should be defined', async () => {
      expect(controller.update).toBeDefined();
    });

    it('should update a report expense', async () => {
      const expected = { ...updateMockValue };
      const result = await controller.update(1, updateMockValue);
      expect(result).toStrictEqual(expected);
    });
  });
  describe('remove', () => {
    it('should be defined', async () => {
      expect(controller.remove).toBeDefined();
    });
    it('should remove a report expense', async () => {
      const expected = { ...mockValue };
      const result = await controller.remove(1);
      expect(result).toStrictEqual(expected);
    });
  });
});
