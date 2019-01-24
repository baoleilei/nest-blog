import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './service/user.service';
import { UsersController } from './controller/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentController } from './controller/blog.controller';
import { CategoryController } from './controller/category.controller'

import { BlogService } from './service/blog.service';
import {CategoryService} from './service/category.service'

import { CryptoUtil} from './utils/crypto.util'
import { AuthService } from './service/auth.service'
import { HttpStrategy } from './common/http.strategy'
//entity
import {User} from './entity/user.entity'
import {Blog} from './entity/blog.entity'
import {Category} from './entity/category.entity'
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([User, Blog,Category])
  ],
  controllers: [AppController, UsersController, ContentController, CategoryController],
  providers: [AppService,CategoryService, UsersService, BlogService,AuthService, CryptoUtil, HttpStrategy],
})
export class AppModule {}
