import { MigrationInterface, QueryRunner } from "typeorm";

export class alterColumnTellPhoneAndEmailsExtra1679445520370 implements MigrationInterface {
    name = 'alterColumnTellPhoneAndEmailsExtra1679445520370'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" ALTER COLUMN "telephonesExtra" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contact" ALTER COLUMN "emailsExtra" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ALTER COLUMN "telephonesExtra" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ALTER COLUMN "emailsExtra" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" ALTER COLUMN "emailsExtra" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ALTER COLUMN "telephonesExtra" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contact" ALTER COLUMN "emailsExtra" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contact" ALTER COLUMN "telephonesExtra" SET NOT NULL`);
    }

}
