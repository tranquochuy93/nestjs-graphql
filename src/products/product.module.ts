import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from './repositories/product.repository';

@Module({
    imports: [TypeOrmModule.forFeature([ProductRepository])],
    providers: [],
    controllers: [],
    exports: []
})
export class ProductModule {}
