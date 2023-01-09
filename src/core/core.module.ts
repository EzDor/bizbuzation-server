import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbConfig } from '@src/core/db/db-config';

@Module({
  imports: [TypeOrmModule.forRoot(DbConfig.getDbConfig(process.env.NODE_ENV))],
})
export class CoreModule {}
