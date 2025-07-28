import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Employe } from '../../employe/entities/employe.entity';

@Entity()
export class Departement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  nom_departement: string;

  @Column({ nullable: true })
  nom_service: string;

  @Column({ nullable: true })
  nom_unite: string;

  // Relation parent -> enfants
  @ManyToOne(() => Departement, (departement) => departement.children, {
    nullable: true,
    onDelete: 'CASCADE', // supprime un enfant si le parent est supprimé
  })
  parent?: Departement;

  @OneToMany(() => Departement, (departement) => departement.parent, {
    cascade: true, // permet l'insertion automatique des enfants
  })
  children: Departement[];

  // Relation département -> employés
  @OneToMany(() => Employe, (employe) => employe.departement)
  employes: Employe[];
}
