import { Users } from './users.entity';
import { EntityRepository, Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {
    async signUp(login, password) {
        const finded = await this.findOne({ login });
        if (!finded) {
            const user = new Users();
            user.login = login;
            user.password = password;
            await user.save();
            return {
                result: true,
            };
        } else {
            return {
                result: false,
            };
        }
    }

    async signIn(login, password) {
        const finded = await this.findOne({ login });
        if (!finded) {
            return {
                result: false,
            };
        } else {
            if (finded.password === password)
                return {
                    result: true,
                    token: uuid(),
                };
            else
                return {
                    result: false,
                };
        }
    }
}
