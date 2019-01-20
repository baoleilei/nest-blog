import { Controller , Post, Body, Get, Param, Query} from '@nestjs/common';
import {UsersService} from '../service/user.service'

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Post('register')
    async register(@Body() params): Promise<any> {
      console.log('register', params)
      /* return this.authService.login(params.name, params.password); */
      return this.userService.create(params.username, params.password);
    } 
    

    @Get('login') 
    async login(@Query() qery) :Promise<any>{
      console.log('params', qery)
      return this.userService.login(qery.username, qery.password);
    }


}
