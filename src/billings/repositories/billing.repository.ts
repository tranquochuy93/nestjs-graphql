import { EntityRepository, Repository } from 'typeorm';
import { BillingEntity } from '~billings/entities/billing.entity';

@EntityRepository(BillingEntity)
export class BillingRepository extends Repository<BillingEntity> {}
