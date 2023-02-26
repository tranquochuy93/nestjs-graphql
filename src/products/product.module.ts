import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './http/controllers/product.controller';
import { ProductRepository } from './repositories/product.repository';
import { ProductResolver } from './resolvers/product.resolver';
import { ProductService } from './services/product.service';

@Module({
    imports: [TypeOrmModule.forFeature([ProductRepository])],
    providers: [ProductService, ProductResolver],
    controllers: [ProductController],
    exports: [ProductService]
})
export class ProductModule {}
