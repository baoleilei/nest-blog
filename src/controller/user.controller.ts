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
    async login(@Query() query) :Promise<any>{
      console.log('params', query)
      return this.userService.login(query.username, query.password);
    }

    @Get('checklogin')
    //@UseGuards(new RoleGuard(['admin']))
    public checkLogin(@Query() query) {
      return this.userService.checklogin(query.token)
    }

}
