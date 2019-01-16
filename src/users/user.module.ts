import { Module } from '@nestjs/common';
import {User} from './user.entity'
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: []
})
export class UsersModule {
}
