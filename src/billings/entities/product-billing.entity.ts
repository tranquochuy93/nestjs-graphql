import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '~core/entities/base.entity';
import { ProductEntity } from '~products/entities/product.entity';
import { BillingEntity } from './billing.entity';

@Entity('ProductBilling')
export class ProductBillingEntity extends BaseEntity {
    @Column({ type: 'numeric' })
    amountOfProduct: string;

    @Column({ type: 'uuid' })
    productId: string;

    @OneToMany(() => ProductEntity, (product) => product.productBillings)
    product: ProductEntity;

    @OneToMany(() => BillingEntity, (product) => product.productBillings)
    billing: BillingEntity;
}
