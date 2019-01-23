import { Entity, Column, PrimaryGeneratedColumn, OneToMany, UpdateDateColumn ,OneToOne} from 'typeorm';
import {Content} from './content.entity'

@Entity('meta')
export class Meta {
    @PrimaryGeneratedColumn()
    mid: number

    @Column('varchar',{length:'200'})
    name: string
    
}
