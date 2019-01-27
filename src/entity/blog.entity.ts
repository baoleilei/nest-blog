import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import * as moment from 'moment';
@Entity('blog')
export class Blog {
    @PrimaryGeneratedColumn({name:'blog_id'})
    blogId: number

    @Column('varchar',{length:'200'})
    title: string

    @Column('text', {
      comment: '内容文字',
      nullable: true
    })
    content: string
    
    @Column('int',{name: 'user_id'})
    userId: number
    
    @Column('int',{name: 'categor_id'})
    categoryId: number

    @CreateDateColumn({
      transformer: {
          from: (date: Date) => {
              return moment(date).format('YYYY-MM-DD HH:mm:ss');
          },
          to: () => {
              return new Date();
          }
      }
  })
  created_at: string;

  @UpdateDateColumn({
      transformer: {
          from: (date: Date) => {
              return moment(date).format('YYYY-MM-DD HH:mm:ss');
          },
          to: () => {
              return new Date();
          }
      }
  })
  updated_at: string;
}
