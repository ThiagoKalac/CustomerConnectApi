import { MigrationInterface, QueryRunner } from "typeorm";

export class alterColumnNicknameAndEmail1679679080049 implements MigrationInterface {
    name = 'alterColumnNicknameAndEmail1679679080049'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "UQ_0ccceae1c81156c175196e138f6"`);
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "UQ_eff09bb429f175523787f46003b"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "UQ_eff09bb429f175523787f46003b" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "UQ_0ccceae1c81156c175196e138f6" UNIQUE ("nickname")`);
    }

}
