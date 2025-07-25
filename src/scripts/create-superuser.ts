import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { EmployeService } from '../employe/employe.service';
import * as bcrypt from 'bcrypt';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const employeService = app.get(EmployeService);

  const superuserEmail = 'admin@rh.com';
  const superuser = await employeService.findOne(superuserEmail);

  if (!superuser) {
    const hashedPassword = await bcrypt.hash('Admin123@', 6);
    await employeService.create({
      email: superuserEmail,
      nom: 'Admin',
      prenom: 'RH',
      poste: 'Administrateur Système',
      date_embauche: new Date(),
      isSuperieur: true,
      password: hashedPassword,
    });
    console.log('Superuser créé avec succès');
  } else {
    console.log('Superuser existe déjà');
  }

  await app.close();
}
void bootstrap();
