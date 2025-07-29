import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Departement } from 'src/departement/entities/departement.entity';

@Entity()
export class Employe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column({ nullable: true })
  prenom: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @ManyToOne(() => Departement, (departement) => departement.employes, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  departement: Departement;
}
