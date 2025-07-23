import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'RH_DB',
  entities: [join(__dirname, '..', '', '*.entity{.ts,.js}')],
  migrations: [join(__dirname, 'migrations', '', '*{.ts,.js}')],
};
