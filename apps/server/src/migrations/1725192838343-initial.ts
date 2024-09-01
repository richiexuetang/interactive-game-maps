import { MigrationInterface, QueryRunner } from 'typeorm';

export class Initial1725192838343 implements MigrationInterface {
  name = 'Initial1725192838343';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "game"
            ADD "minZoom" integer NOT NULL DEFAULT '0'
        `);
    await queryRunner.query(`
            ALTER TABLE "game"
            ADD "maxZoom" integer NOT NULL DEFAULT '0'
        `);
    await queryRunner.query(`
            ALTER TABLE "game"
            ADD "defaultZoom" integer NOT NULL DEFAULT '0'
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "game" DROP COLUMN "defaultZoom"
        `);
    await queryRunner.query(`
            ALTER TABLE "game" DROP COLUMN "maxZoom"
        `);
    await queryRunner.query(`
            ALTER TABLE "game" DROP COLUMN "minZoom"
        `);
  }
}
