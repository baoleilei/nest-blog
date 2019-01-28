import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { User } from '../entity/user.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { CryptoUtil } from '../utils/crypto.util';
import { Repository, getManager, getConnection } from 'typeorm';

import { AuthService } from './auth.service';
@Injectable() 
export class UsersService {
    constructor(
        @InjectRepository(User)  private readonly userRepository: Repository<User>,
        @Inject(CryptoUtil) private readonly cryptoUtil: CryptoUtil,
        @Inject(forwardRef(() => AuthService)) private readonly authService: AuthService,
    ) {}
    /**
     *  注册
     */
    async  create(username: string, password: string): Promise<any>{
        let user = new User()
        user.username = username
        user.password =  await this.cryptoUtil.encryptPassword(password)
        return this.userRepository.save(user)
        .catch(err => {
            console.log(err)
            return err
        });
    }

    async login(username: string, password: string): Promise<any>{ 
       let user =  await  this.userRepository.findOne({username: username})
       console.log('data', user)
       if(user) {
        if( !this.cryptoUtil.checkPassword(password, user.password)) {
            return { data:'密码有误'}
        }else {
          return await this.authService.createToken({username, password})
        }
       }else {
        return {data: ' 无该用户'}
       }


       
    }
    async  checklogin(token) {
      return this.authService.checkToken(token);
    }

}
