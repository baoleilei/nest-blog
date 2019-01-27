import { Controller,UseGuards, Post, Body,Request} from '@nestjs/common';
import { Blog } from '../entity/blog.entity' 
import { CreateCatDto } from '../dto/blog.dto'
import { AuthGuard } from '@nestjs/passport'
import {BlogService} from '../service/blog.service' 
import { Codes } from '../common/codes/code'

@Controller('blog')
export class ContentController {
  constructor(private readonly contentService: BlogService) { }

  @Post('create')
  @UseGuards(AuthGuard('jwt'))
  async create( @Body() createCatDto, @Request() req) : Promise<any> {
    console.log('req22', req.user, createCatDto)
    return this.contentService.create(req.user, createCatDto).then(res => {
      return {
        code:Codes.Sucess,
        data:res
      }
    })
  }
}
