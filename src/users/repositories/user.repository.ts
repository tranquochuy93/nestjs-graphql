import { Repository } from 'typeorm';
import { UserEntity } from '~users/entities/user.entity';

export class UserRepository extends Repository<UserEntity> {
    async findByEmail(email: string) {
        return this.findOne({ where: { email } });
    }
}
