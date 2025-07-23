import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  date_debut: string;

  @Column({ type: 'date' })
  date_fin: string;

  @Column({ type: 'int' })
  duree: number;

  @Column()
  motif: string;

  @Column({ default: 'EN_ATTENTE' }) // EN_ATTENTE | ACCEPTEE | REJETEE
  statut: string;

  @Column({ nullable: true })
  commentaire_validation?: string;

  // Relation vers l'employé à ajouter si nécessaire
}
