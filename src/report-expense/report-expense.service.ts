import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReportExpenseEntity } from '@src/dao/entities/report-expense.entity';
import { ReportExpenseDto } from '@src/dto/report-expense/report-expense.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ReportExpenseService {
  constructor(@InjectRepository(ReportExpenseEntity) private reportExpenseRepository: Repository<ReportExpenseEntity>) {}

  public create(reportExpenseDto: ReportExpenseDto): Promise<ReportExpenseEntity> {
    return this.reportExpenseRepository.save(reportExpenseDto);
  }

  public findAll(): Promise<ReportExpenseEntity[]> {
    return this.reportExpenseRepository.find();
  }

  public findOne(id: number): Promise<ReportExpenseEntity> {
    return this.reportExpenseRepository.findOneBy({ id });
  }

  public update(id: number, reportExpenseDto: ReportExpenseDto): Promise<UpdateResult> {
    return this.reportExpenseRepository.update({ id }, reportExpenseDto);
  }

  public remove(id: number): Promise<DeleteResult> {
    return this.reportExpenseRepository.delete({ id });
  }
}
