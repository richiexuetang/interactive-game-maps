import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gameSlug: string;

  @Column()
  gameTitle: string;

  @Column()
  thumbnailUrl: string;

  @Column({ default: true })
  isActive: boolean;
}
