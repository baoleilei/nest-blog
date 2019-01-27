import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import * as moment from 'moment';
@Entity('user')
export class User {
    @PrimaryGeneratedColumn({name:'user_id'})
    userId: number

    @Column('varchar',{length:'32'})
    username: string

    @Column('varchar',{length:'64'})
    password: string
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