import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
@Entity('user')
export class User {
    @PrimaryGeneratedColumn({name:'user_id'})
    userId: number

    @Column('varchar',{length:'32'})
    username: string

    @Column('varchar',{length:'64'})
    password: string

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;
}