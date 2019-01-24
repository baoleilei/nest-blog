import { Controller,UseGuards, Post, Request, Param} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'
import { CategoryService} from '../service/category.service' 

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Post('create')
  @UseGuards(AuthGuard('jwt'))
  async create(@Param()	Param) {
    console.log('req', Param.categoryName)
    return this.categoryService.create(Param.categoryName)
   
  }
}
