import { Game } from '../games/game.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Map {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  mapSlug: string;

  @Column()
  mapTitle: string;

  @Column()
  tilesPath: string;

  @Column()
  thumbnailUrl: string;

  @Column({ default: 0 })
  minZoom: number;

  @Column({ default: 0 })
  maxZoom: number;

  @Column({ default: 0 })
  defaultZoom: number;

  @Column({ default: true })
  isActive: boolean;

  @ManyToOne(() => Game, (game) => game.maps)
  game: Game;
}
