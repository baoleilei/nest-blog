import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/user.service';
import { UsersController } from './users/user.controller';
import { UsersModule } from './users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentController } from './content/content.controller';
import { ContentService } from './content/content.service';
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule
  ],
  controllers: [AppController, UsersController, ContentController],
  providers: [AppService, UsersService, ContentService],
})
export class AppModule {}
