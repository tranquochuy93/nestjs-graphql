import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductEntity } from '~products/entities/product.entity';
import { UpsertProductDto } from '~products/http/dto/upsert-product.dto';
import { ProductService } from '~products/services/product.service';

@Resolver(() => ProductEntity)
export class ProductResolver {
    constructor(private productService: ProductService) {}

    @Query(() => [ProductEntity])
    products(): Promise<ProductEntity[]> {
        return this.productService.find();
    }

    @Mutation(() => ProductEntity)
    upsertProduct(@Args('upsertProductDto') dto: UpsertProductDto): Promise<ProductEntity> {
        return this.productService.upsertOne(dto);
    }
}
