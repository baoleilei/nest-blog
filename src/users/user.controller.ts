import { Controller , Get, Req} from '@nestjs/common';
import {UsersService} from './user.service'
@Controller('users')
export class UsersController {
 constructor(private readonly authService: UsersService) { }

  @Get('create')
  async create():Promise<string>{
      return this.authService.create();
  }
}
