import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Employe } from 'src/employe/entities/employe.entity';
import { Departement } from 'src/departement/entities/departement.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '123456',
  database: process.env.DB_NAME || 'RH_DB',
  synchronize: false,
  logging: false,
  entities: [Employe, Departement],
  migrations: ['dist/migrations/*.js'],
  subscribers: [],
});
