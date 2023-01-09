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
      entities: ['@src/dao/entity/*.ts'],
      migrations: ['@src/dao/migration/*.ts'],
      subscribers: ['@src/dao/subscriber/*.ts'],
    },
    test: {
      type: 'sqlite',
      database: 'test.sqlite',
      synchronize: true,
      logging: false,
      entities: ['src/dao/entity/*.ts'],
      migrations: ['src/dao/migration/*.ts'],
      subscribers: ['src/dao/subscriber/*.ts'],
    },
  };

  public static getDbConfig(env: string): TypeOrmModuleOptions {
    const environment = env || this.DEFAULT_ENVIRONMENT;
    return this.config[environment];
  }
}
