import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, UpdateDateColumn ,OneToOne} from 'typeorm';
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
}
