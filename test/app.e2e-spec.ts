import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { ReportExpenseDto } from '@src/dto/report-expense/report-expense.dto';
import * as request from 'supertest';
import { AppModule } from '@src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, ConfigModule.forRoot({ envFilePath: '../env/.test.env' })],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer()).get('/').expect(200).expect('Hello World!');
  });

  describe('ReportExpenseModule', () => {
    const baseUrl = '/report-expense';

    it(`/${baseUrl} (GET) empty array`, () => {
      const response = request(app.getHttpServer()).get(baseUrl);
      response.expect(200);
      response.expect([]);
    });

    it(`/${baseUrl} (POST) create report expense`, async () => {
      const reportExpenseDto: ReportExpenseDto = {
        date: new Date(Date.now()),
        amount: Math.random() * 1000,
        account: 'Shared',
        type: 'Food',
        subtype: 'Grocery',
        comment: 'The brothers store',
      };
      const expected = { ...reportExpenseDto, id: expect.any(Number) };

      const createResponse = await request(app.getHttpServer()).post(baseUrl).send(reportExpenseDto);

      expect(createResponse.status).toBe(201);
      expect(createResponse).toBe(expected);
    });
  });
});
