import { Injectable } from '@nestjs/common';
import { FindManyOptions } from 'typeorm';
import { ProductEntity } from '~products/entities/product.entity';
import { UpsertProductDto } from '~products/http/dto/upsert-product.dto';
import { ProductRepository } from '~products/repositories/product.repository';

@Injectable()
export class ProductService {
    constructor(private productRepo: ProductRepository) {}

    async upsertOne(dto: UpsertProductDto): Promise<ProductEntity> {
        const { id } = dto;
        if (id) {
            await this.productRepo.findOneOrFail({ where: { id } });
        }

        return this.productRepo.save(dto);
    }

    find(option?: FindManyOptions<ProductEntity>): Promise<ProductEntity[]> {
        return this.productRepo.find(option);
    }
}
