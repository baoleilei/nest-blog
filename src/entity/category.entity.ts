import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import * as moment from 'moment';

@Entity('category')
export class Category {
    @PrimaryGeneratedColumn({name: 'category_id'})
    categoryId: number

    @Column('varchar',{name: 'category_name', length:'200'})
    categoryName: string

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
