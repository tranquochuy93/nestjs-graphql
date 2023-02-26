import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './repositories/user.repository';
import { UserResolver } from './resolvers/user.resolver';
import { UserService } from './services/user.service';

@Module({
    imports: [TypeOrmModule.forFeature([UserRepository])],
    controllers: [],
    providers: [UserService, UserResolver],
    exports: [UserService]
})
export class UserModule {}
