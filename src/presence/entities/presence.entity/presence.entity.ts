import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Presence {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  date_heure: Date;

  @Column()
  employe_email: string;

  @Column({ nullable: true })
  localisation?: string;

  @CreateDateColumn()
  created_at: Date;
}
