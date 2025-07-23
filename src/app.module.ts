import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { PermissionModule } from './permission/permission.module';
import { PresenceModule } from './presence/presence.module';
import { DepartementModule } from './departement/departement.module';
import { UtilisateurModule } from './utilisateur.module';
import { databaseConfig } from './config/database.config';
import { EmployeModule } from './employe/employe.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    AuthModule,
    EmployeModule,
    PresenceModule,
    DepartementModule,
    UtilisateurModule,
    PermissionModule,
  ],
})
export class AppModule {}
