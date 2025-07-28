import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Not, IsNull } from 'typeorm';
import { Departement } from './entities/departement.entity';

@Injectable()
export class DepartementService {
  constructor(
    @InjectRepository(Departement)
    private readonly departementRepository: Repository<Departement>,
  ) {}

  // Création de la hiérarchie par défaut
  async seed() {
    // Supprime d'abord tous les enregistrements de manière sûre
    await this.departementRepository.delete({ id: Not(IsNull()) });

    const hierarchy = [
      {
        nom_departement: 'Technical Managment',
        services: [
          {
            nom_service: 'Software Development',
            unites: [
              { nom_unite: 'Web Development Unit' },
              { nom_unite: 'Mobile Development Unit' },
              { nom_unite: 'Technical Writing Unit' },
            ],
          },
          {
            nom_service: 'Operation Service',
            unites: [
              { nom_unite: 'Database Administration Unit' },
              { nom_unite: 'CI/CD Pipeline Management Unit' },
              { nom_unite: 'System Security Unit' },
              { nom_unite: 'Technical Support' },
            ],
          },
          {
            nom_service: 'Analytique Service',
            unites: [
              { nom_unite: 'Reporting Unit' },
              { nom_unite: 'BI/Predicting' },
            ],
          },
          {
            nom_service: 'Agritech',
            unites: [],
          },
        ],
      },
      {
        nom_departement: 'Business Development',
        services: [
          { nom_service: 'Accountant', unites: [] },
          { nom_service: 'Business Analyst', unites: [] },
          { nom_service: 'Business Developer', unites: [] },
          { nom_service: 'Forwading', unites: [] },
          { nom_service: 'Building and Public Works', unites: [] },
        ],
      },
    ];

    // Création hiérarchique
    for (const dep of hierarchy) {
      for (const srv of dep.services) {
        if (srv.unites.length > 0) {
          for (const unit of srv.unites) {
            await this.departementRepository.save(
              this.departementRepository.create({
                nom_departement: dep.nom_departement,
                nom_service: srv.nom_service,
                nom_unite: unit.nom_unite,
              }),
            );
          }
        } else {
          await this.departementRepository.save(
            this.departementRepository.create({
              nom_departement: dep.nom_departement,
              nom_service: srv.nom_service,
            }),
          );
        }
      }
    }

    return { message: 'Hiérarchie des départements créée avec succès !' };
  }

  // Récupère tous les départements
  async getTree(): Promise<Departement[]> {
    return await this.departementRepository.find();
  }
}
