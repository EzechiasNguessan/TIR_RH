import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Employe } from 'src/employe/entities/employe.entity';

@Entity()
export class Departement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  nom: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => Employe, (employe) => employe.departement)
  employes: Employe[];
}
