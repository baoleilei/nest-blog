import { Injectable, Inject } from '@nestjs/common';
import { Content } from '../entity/content.entity'
import { User} from '../entity/user.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager, getConnection } from 'typeorm';
import { CryptoUtil } from '../utils/crypto.util';
@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(Content)  private readonly contentRepository: Repository<Content>,
    @InjectRepository(User)  private readonly userRepository: Repository<User>,
    @Inject(CryptoUtil) private readonly cryptoUtil: CryptoUtil,
) {}
  async create(user) {
  
    let content = new Content()
    content.title = '1'
    content.content = 'con'
   
    // todo
    let duser=  await this.userRepository.findOne({username:user.username})
    content.uid = duser.uid
    console.log('duser',duser)
    return this.contentRepository.save(content)
      .then(() => {
        return 'sucess create'
      })
  }
}
