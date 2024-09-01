import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres', // It could be mysql, mongo, etc
  host: 'localhost',
  port: 5432,
  username: 'postgres', // postgre username
  password: 'postgrespw', // postgre password
  database: 'interactive-map',
  synchronize: false, // if true, you don't really need migrations
  logging: true,
  entities: ['src/**/*.entity{.ts,.js}'], // where our entities reside
  migrations: ['src/migrations/*{.ts,.js}'],
  subscribers: [],
});
