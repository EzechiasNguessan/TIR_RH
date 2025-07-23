import { Entity, Column, PrimaryColumn, ManyToMany } from 'typeorm';
import { Departement } from 'src/departement/entities/departement.entity';

@Entity()
export class Employe {
  @PrimaryColumn()
  email: string;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column()
  matricule: string;

  @Column()
  poste: string;

  @Column({ type: 'date' })
  date_embauche: Date;

  @ManyToMany(() => Departement, (departement) => departement.employes)
  departements: Departement[];

  @Column({ nullable: true })
  superieur_email: string;
}
