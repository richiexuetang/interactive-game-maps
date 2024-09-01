import { Map } from '../maps/map.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

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

  @OneToMany(() => Map, (map) => map.game)
  maps: Map[];
}
