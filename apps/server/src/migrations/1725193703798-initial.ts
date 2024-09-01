import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1725193703798 implements MigrationInterface {
    name = 'Initial1725193703798'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "map" (
                "id" SERIAL NOT NULL,
                "mapSlug" character varying NOT NULL,
                "mapTitle" character varying NOT NULL,
                "tilesPath" character varying NOT NULL,
                "thumbnailUrl" character varying NOT NULL,
                "minZoom" integer NOT NULL DEFAULT '0',
                "maxZoom" integer NOT NULL DEFAULT '0',
                "defaultZoom" integer NOT NULL DEFAULT '0',
                "isActive" boolean NOT NULL DEFAULT true,
                "gameId" integer,
                CONSTRAINT "PK_3b08de72489b3d4471b74516819" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "game" DROP COLUMN "minZoom"
        `);
        await queryRunner.query(`
            ALTER TABLE "game" DROP COLUMN "maxZoom"
        `);
        await queryRunner.query(`
            ALTER TABLE "game" DROP COLUMN "defaultZoom"
        `);
        await queryRunner.query(`
            ALTER TABLE "map"
            ADD CONSTRAINT "FK_188060f2bec0126beb0a9f63dfa" FOREIGN KEY ("gameId") REFERENCES "game"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "map" DROP CONSTRAINT "FK_188060f2bec0126beb0a9f63dfa"
        `);
        await queryRunner.query(`
            ALTER TABLE "game"
            ADD "defaultZoom" integer NOT NULL DEFAULT '0'
        `);
        await queryRunner.query(`
            ALTER TABLE "game"
            ADD "maxZoom" integer NOT NULL DEFAULT '0'
        `);
        await queryRunner.query(`
            ALTER TABLE "game"
            ADD "minZoom" integer NOT NULL DEFAULT '0'
        `);
        await queryRunner.query(`
            DROP TABLE "map"
        `);
    }

}
