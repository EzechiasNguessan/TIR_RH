import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddNomDepartementDefault172198xxxxxxx
  implements MigrationInterface
{
  name = 'AddNomDepartementDefault172198xxxxxxx';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "departement"
      ADD "nom_departement" character varying NOT NULL DEFAULT 'Inconnu'
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "departement" DROP COLUMN "nom_departement"
    `);
  }
}
