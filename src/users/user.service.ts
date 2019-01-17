import { Injectable } from '@nestjs/common';
import { User } from './user.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager, getConnection } from 'typeorm';
@Injectable()
export class UsersService {
    constructor(@InjectRepository(User)
    private readonly userRepository: Repository<User>) { }
        async  create(): Promise<string>{
        let user = new User()
        user.username = 'bao'
        user.password = '2d'
        return this.userRepository.save(user).then(res => {
            return 'create employee ...done'
        })
        .catch(err => {
            console.log(err)
            return err
        });
    }
}
