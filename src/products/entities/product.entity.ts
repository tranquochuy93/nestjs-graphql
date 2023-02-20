import { Column, Entity, ManyToOne } from 'typeorm';
import { ProductBillingEntity } from '~billings/entities/product-billing.entity';
import { BaseEntity } from '~core/entities/base.entity';

@Entity('Product')
export class ProductEntity extends BaseEntity {
    @Column({ type: 'jsonb' })
    name: string;

    @Column({ type: 'numeric' })
    price: number;

    @ManyToOne(() => ProductBillingEntity, (productBilling) => productBilling.product)
    productBillings: ProductBillingEntity[];
}
