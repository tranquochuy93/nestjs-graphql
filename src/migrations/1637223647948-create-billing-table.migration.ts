import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateBillingTable1637223647948 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "Billing" (
                "id" uuid NOT NULL DEFAULT public.uuid_generate_v4(), 
                "userId" uuid NOT NULL, 
                "price" numeric NOT NULL, 
                "deletedAt" TIMESTAMP,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
            );`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Billing";`);
    }
}
