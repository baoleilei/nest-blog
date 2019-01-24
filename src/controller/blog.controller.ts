import { Controller,UseGuards, Post, Request} from '@nestjs/common';
import { Blog } from '../entity/blog.entity' 
import { AuthGuard } from '@nestjs/passport'
import {BlogService} from '../service/blog.service' 

@Controller('blog')
export class ContentController {
  constructor(private readonly contentService: BlogService) { }

  @Post('create')
  @UseGuards(AuthGuard('jwt'))
  async create(@Request()	req) {
    console.log('req', req.user)
    return this.contentService.create(req.user)
   
  }
}
