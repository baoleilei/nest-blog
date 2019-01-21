import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './service/user.service';
import { UsersController } from './controller/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentController } from './controller/content.controller';
import { ContentService } from './service/content.service';
import { CryptoUtil} from './utils/crypto.util'
import { AuthService } from './service/auth.service'
import { HttpStrategy } from './common/http.strategy'
//entity
import {User} from './entity/user.entity'
import {Content} from './entity/content.entity'
import { from } from 'rxjs';
 
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([User, Content])
  ],
  controllers: [AppController, UsersController, ContentController],
  providers: [AppService, UsersService, ContentService,AuthService, CryptoUtil, HttpStrategy],
})
export class AppModule {}
