import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Departement } from 'src/departement/entities/departement.entity';

@Entity()
export class Employe {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column({ default: true })
  actif: boolean;

  @Column({ nullable: true })
  poste?: string;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  date_embauche: Date;

  @ManyToMany(() => Departement, (departement) => departement.employes, {
    nullable: true,
  })
  departements?: Departement[];

  @Column({ nullable: true })
  superieur_email?: string;
}
