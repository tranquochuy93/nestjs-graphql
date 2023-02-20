import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductBillingEntity } from './entities/product-billing.entity';
import { BillingRepository } from './repositories/billing.repository';

@Module({
    imports: [TypeOrmModule.forFeature([BillingRepository, ProductBillingEntity])],
    providers: [],
    controllers: [],
    exports: []
})
export class BillingModule {}
