import { Controller , Post, Body, Get, Param, Query} from '@nestjs/common';
import {UsersService} from '../service/user.service'
import { Codes } from '../common/codes/code'

import moment from 'moment';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Post('register')
    async register(@Body() params): Promise<any> {
      console.log('register', params)
      /* return this.authService.login(params.name, params.password); */
      return this.userService.create(params.username, params.password).then(res => {
        return {
          code:Codes.Sucess,
          data:res
        }
      });
    } 


    @Get('login') 
    async login(@Query() query) :Promise<any>{
      console.log('params', query)
      return this.userService.login(query.username, query.password).then(res => {
        return {
          code:Codes.Sucess,
          data:res
        }
      });
    }

    @Get('checklogin')
    public checkLogin(@Query() query) :Promise<any> {
      return this.userService.checklogin(query.token).then(res => {
        return {
          code:Codes.Sucess,
          data:res
        }
      })
    }

}
