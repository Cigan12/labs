import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

export interface IUser {
    login: string;
    token: string;
}

@Injectable()
export class Laba1Service {
    private users: Array<IUser> = [];

    registerUser(login) {
        if (this.users.find(item => item.login === login)) {
            return 'exist';
        } else {
            const token = uuidv4();

            this.users.push({
                login,
                token,
            });

            return token;
        }
    }

    login(login, token) {
        const findedUser = this.users.find(item => item.login === login);
        let equal;
        if (findedUser) equal = findedUser.token === token;
        else equal = false;
        if (equal) return 'success';
        else return 'error';
    }
}
