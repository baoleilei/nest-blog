import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import { UsersService } from './user.service';


@Injectable()
export class AuthService {

    // TODO: 配置有效期
    async createToken(payload): Promise<any> {
        const accessToken = jwt.sign(payload, 'secretKey', { expiresIn: '1d' });
        return { accessToken, expiresIn: 60 };
        // 60 * 60 * 24
    }
    async  checkToken(token) {
       return  jwt.verify(token, 'secretKey');
    }
}
