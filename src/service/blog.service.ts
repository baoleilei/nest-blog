import { Injectable, Inject } from '@nestjs/common';
import { Blog } from '../entity/blog.entity'
import { User} from '../entity/user.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager, getConnection } from 'typeorm';
import { CryptoUtil } from '../utils/crypto.util';
@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)  private readonly contentRepository: Repository<Blog>,
    @InjectRepository(User)  private readonly userRepository: Repository<User>,
    @Inject(CryptoUtil) private readonly cryptoUtil: CryptoUtil,
) {}
  async create(user) {
  
    let content = new Blog()
    content.title = '1'
    content.content = 'con'
   
    // todo
    let duser=  await this.userRepository.findOne({username:user.username})
    content.userId = duser.userId
    console.log('duser',duser)
    return this.contentRepository.save(content)
      .then(() => {
        return 'sucess create'
      })
  }
}
