import { MigrationInterface, QueryRunner } from "typeorm";

export class createTable1679426457424 implements MigrationInterface {
    name = 'createTable1679426457424'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contact" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nickname" character varying(100) NOT NULL, "fullName" character varying(200) NOT NULL, "telephone" character varying(11) NOT NULL, "telephonesExtra" text NOT NULL, "email" character varying(100) NOT NULL, "emailsExtra" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "clientId" uuid, CONSTRAINT "UQ_0ccceae1c81156c175196e138f6" UNIQUE ("nickname"), CONSTRAINT "UQ_eff09bb429f175523787f46003b" UNIQUE ("email"), CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "client" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nickname" character varying(100) NOT NULL, "fullName" character varying(200) NOT NULL, "telephone" character varying(11) NOT NULL, "telephonesExtra" text NOT NULL, "email" character varying(100) NOT NULL, "emailsExtra" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "password" character varying(120) NOT NULL, CONSTRAINT "UQ_caba79143da0452a9d661ab45c5" UNIQUE ("nickname"), CONSTRAINT "UQ_6436cc6b79593760b9ef921ef12" UNIQUE ("email"), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_e99f8e5bcbccaec7b0b7ed65526" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_e99f8e5bcbccaec7b0b7ed65526"`);
        await queryRunner.query(`DROP TABLE "client"`);
        await queryRunner.query(`DROP TABLE "contact"`);
    }

}
