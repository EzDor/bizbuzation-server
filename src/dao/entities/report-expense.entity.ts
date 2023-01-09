import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ReportExpense {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public date: Date;

  @Column()
  public amount: number;

  @Column()
  public account: string;

  @Column()
  public type: string;

  @Column()
  public subtype: string;

  @Column()
  public comment: string;
}
