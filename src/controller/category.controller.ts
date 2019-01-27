import { Controller,UseGuards, Post,Body, Request, Param} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'
import { CategoryService} from '../service/category.service' 
import { Codes } from '../common/codes/code'
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Post('create')
  @UseGuards(AuthGuard('jwt'))
  async create(@Body()	Param) :Promise<any> {
    console.log('req111', Param.categoryName)
    return this.categoryService.create(Param.categoryName).then(res => {
      return {
        code:Codes.Sucess,
        data:res
      }
    })
  }
}
