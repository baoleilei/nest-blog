import { Entity,PrimaryColumn, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import * as moment from 'moment';
@Entity('blog_category_relationships')
export class BlogCategoryRelationships {
    @PrimaryColumn({name:'blog_id'})
    blogId: number

    @PrimaryColumn({name:'category_id'})
    categoryId: string

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
