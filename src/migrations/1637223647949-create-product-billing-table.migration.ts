import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateProductBillingTable1637223647949 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "ProductBilling" (
                "id" uuid NOT NULL DEFAULT public.uuid_generate_v4(), 
                "productId" uuid NOT NULL, 
                "amountOfProduct" numeric NOT NULL, 
                "deletedAt" TIMESTAMP,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
            );`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "ProductBilling";`);
    }
}
