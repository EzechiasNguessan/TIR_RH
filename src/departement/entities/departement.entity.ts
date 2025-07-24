import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Employe } from 'src/employe/entities/employe.entity';

@Entity()
export class Departement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  nom: string;

  @Column({ nullable: true })
  description: string;

  @ManyToMany(() => Employe, (employe) => employe.departements)
  @JoinTable()
  employes: Employe[];
}
