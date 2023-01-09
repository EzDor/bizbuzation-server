import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';

export class DbConfig {
  private static DEFAULT_ENVIRONMENT = 'development';
  private static config: { [key: string]: TypeOrmModuleOptions } = {
    development: {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'bizbuzation',
      synchronize: false,
      logging: false,
      entities: ['dist/src/dao/entities/*.ts'],
      migrations: ['dist/src/dao/migrations/*.ts'],
      subscribers: ['dist/src/dao/subscribers/*.ts'],
    },
    test: {
      type: 'sqlite',
      database: 'db-test.sqlite',
      synchronize: true,
      logging: false,
      entities: ['dist/src/dao/entities/*.ts'],
      migrations: ['dist/src/dao/migrations/*.ts'],
      subscribers: ['dist/src/dao/subscribers/*.ts'],
    },
  };

  public static getDbConfig(env: string): TypeOrmModuleOptions {
    const environment = env || this.DEFAULT_ENVIRONMENT;
    return this.config[environment];
  }
}
