import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  readonly uuid: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  surname: string;

  @Column({ nullable: false, default: false })
  isTracking: boolean;

  @Column({ nullable: true })
  lastGeoPosition?: string;

  @UpdateDateColumn()
  readonly updatedAt: Date;
  @CreateDateColumn()
  readonly createdAt: Date;
}
