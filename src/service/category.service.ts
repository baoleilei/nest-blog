import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { Category } from '../entity/category.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager, getConnection } from 'typeorm';

@Injectable() 
export class CategoryService {
    constructor(
        @InjectRepository(Category)  private readonly categoryRepository: Repository<Category>,
    ) {}
    /**
     *  注册
     */
    async create(categoryName): Promise<any>{
      let categ = new Category()
      categ.categoryName = categoryName
      return this.categoryRepository.save(categ)
    }
}
