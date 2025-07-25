import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Departement } from 'src/departement/entities/departement.entity';

@Entity()
export class Employe {
  @Column({ type: 'boolean', default: false })
  isSuperieur: boolean;

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column({ select: false }) // exclu par défaut dans les requêtes
  password: string;

  @Column({ default: true })
  actif: boolean;

  @Column()
  poste: string;

  @Column({ type: 'date' })
  date_embauche: Date;

  @Column({ nullable: true })
  superieur_email: string;

  @ManyToOne(() => Departement, (departement) => departement.employes, {
    nullable: true,
  })
  departement?: Departement;
  role: any;
}
