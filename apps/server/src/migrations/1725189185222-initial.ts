import { MigrationInterface, QueryRunner } from 'typeorm';

export class Initial1725189185222 implements MigrationInterface {
  name = 'Initial1725189185222';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "game" (
                "id" SERIAL NOT NULL,
                "gameSlug" character varying NOT NULL,
                "gameTitle" character varying NOT NULL,
                "thumbnailUrl" character varying NOT NULL,
                "isActive" boolean NOT NULL DEFAULT true,
                CONSTRAINT "PK_352a30652cd352f552fef73dec5" PRIMARY KEY ("id")
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE "game"
        `);
  }
}
