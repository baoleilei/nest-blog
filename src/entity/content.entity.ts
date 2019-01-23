import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, UpdateDateColumn ,OneToOne} from 'typeorm';
import {Meta} from './meta.entity'
import { from } from 'rxjs';
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
    
    @Column('int')
    uid: number
}
