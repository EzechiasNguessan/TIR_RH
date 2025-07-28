import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddNomServiceDefault1753646305023 implements MigrationInterface {
  name = 'AddNomServiceDefault1753646305023';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "departement" DROP CONSTRAINT "UQ_f509f1f5f0b620e9cf5aec577a0"`,
    );
    await queryRunner.query(`ALTER TABLE "departement" DROP COLUMN "nom"`);
    await queryRunner.query(
      `ALTER TABLE "departement" DROP COLUMN "description"`,
    );
    await queryRunner.query(
      `ALTER TABLE "departement" ADD "description_departement" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "departement" ADD "nom_service" character varying NOT NULL DEFAULT 'Inconnu'`,
    );
    await queryRunner.query(
      `ALTER TABLE "departement" ADD "description_service" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "departement" ADD "nom_unite" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "departement" ADD CONSTRAINT "UQ_c7dfcf88681a211c4a144de9140" UNIQUE ("nom_unite")`,
    );
    await queryRunner.query(
      `ALTER TABLE "departement" ADD "description_unite" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "departement" ADD CONSTRAINT "UQ_22282c56e09b57b1f0200eb6137" UNIQUE ("nom_departement")`,
    );
    await queryRunner.query(
      `ALTER TABLE "departement" ALTER COLUMN "nom_departement" DROP DEFAULT`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "departement" ALTER COLUMN "nom_departement" SET DEFAULT 'Inconnu'`,
    );
    await queryRunner.query(
      `ALTER TABLE "departement" DROP CONSTRAINT "UQ_22282c56e09b57b1f0200eb6137"`,
    );
    await queryRunner.query(
      `ALTER TABLE "departement" DROP COLUMN "description_unite"`,
    );
    await queryRunner.query(
      `ALTER TABLE "departement" DROP CONSTRAINT "UQ_c7dfcf88681a211c4a144de9140"`,
    );
    await queryRunner.query(
      `ALTER TABLE "departement" DROP COLUMN "nom_unite"`,
    );
    await queryRunner.query(
      `ALTER TABLE "departement" DROP COLUMN "description_service"`,
    );
    await queryRunner.query(
      `ALTER TABLE "departement" DROP COLUMN "nom_service"`,
    );
    await queryRunner.query(
      `ALTER TABLE "departement" DROP COLUMN "description_departement"`,
    );
    await queryRunner.query(
      `ALTER TABLE "departement" ADD "description" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "departement" ADD "nom" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "departement" ADD CONSTRAINT "UQ_f509f1f5f0b620e9cf5aec577a0" UNIQUE ("nom")`,
    );
  }
}
