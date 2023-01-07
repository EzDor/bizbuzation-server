export class ReportExpenseDto {
  id: number;
  date: Date;
  amount: number;
  account: string;
  type: string;
  subtype: string;
  comment: string;
}
