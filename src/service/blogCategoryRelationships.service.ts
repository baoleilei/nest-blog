import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { BlogCategoryRelationships } from '../entity/blogCategoryRelationships.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager, getConnection } from 'typeorm';

import { AuthService } from './auth.service';
@Injectable() 
export class BlogCategoryRelationshipsService {
    constructor(
        @InjectRepository(BlogCategoryRelationships)  private readonly userRepository: Repository<BlogCategoryRelationships>,
    ) {}
    /**
     *  注册
     */
    async create(categoryName): Promise<any>{
        
    }
}
