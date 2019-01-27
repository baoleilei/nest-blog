import { Controller, Get,UseGuards, Request  } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  getHello(@Request()	req): string {
    // console.log('re111q111', req.user)
    return this.appService.getHello();
  }
}
