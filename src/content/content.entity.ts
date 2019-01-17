import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn ,OneToOne} from 'typeorm';

@Entity('content')
export class Content {
    @PrimaryGeneratedColumn()
    cid: number

    @Column('varchar',{length:'200'})
    title: string

    @Column('text', {
      comment: '内容文字',
      nullable: true
    })
    content: string
    
    @Column()
    uid: number
}
