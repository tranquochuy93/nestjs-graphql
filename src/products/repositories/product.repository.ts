import { EntityRepository, Repository } from 'typeorm';
import { ProductEntity } from '~products/entities/product.entity';

@EntityRepository(ProductEntity)
export class ProductRepository extends Repository<ProductEntity> {}
