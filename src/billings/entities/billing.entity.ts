import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '~core/entities/base.entity';
import { ProductBillingEntity } from './product-billing.entity';

@Entity('Billing')
export class BillingEntity extends BaseEntity {
    @Column({ type: 'numeric' })
    totalOfPrice: string;

    @Column({ type: 'uuid' })
    userId: string;

    @ManyToOne(() => ProductBillingEntity, (productBilling) => productBilling.product)
    productBillings: ProductBillingEntity[];
}
