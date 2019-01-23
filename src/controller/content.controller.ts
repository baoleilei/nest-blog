import { Controller,UseGuards, Post, Request} from '@nestjs/common';
import { Content } from '../entity/content.entity' 
import { AuthGuard } from '@nestjs/passport'
import {ContentService} from '../service/content.service' 

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) { }

  @Post('create')
  @UseGuards(AuthGuard('jwt'))
  async create(@Request()	req) {
    console.log('req', req.user)
    return this.contentService.create(req.user)
   
  }
}
