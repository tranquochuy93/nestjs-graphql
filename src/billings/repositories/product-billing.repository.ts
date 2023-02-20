import { EntityRepository, Repository } from 'typeorm';
import { ProductBillingEntity } from '~billings/entities/product-billing.entity';

@EntityRepository(ProductBillingEntity)
export class ProductBillingRepository extends Repository<ProductBillingEntity> {}
