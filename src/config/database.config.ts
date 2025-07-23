import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Employe } from 'src/employe/entities/employe.entity/employe.entity';
import { Permission } from 'src/permission/entities/permission.entity/permission.entity';
import { Presence } from 'src/presence/entities/presence.entity/presence.entity';
import { Departement } from 'src/departement/entities/departement.entity';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Employe, Permission, Presence, Departement],
  synchronize: false, // Désactiver en prod
  migrations: ['dist/migrations/*.js'],
  migrationsRun: true,
};
