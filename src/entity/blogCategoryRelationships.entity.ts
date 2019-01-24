import { Entity, Column,PrimaryColumn, PrimaryGeneratedColumn, JoinColumn, ManyToOne, UpdateDateColumn ,OneToOne} from 'typeorm';
@Entity('blog_category_relationships')
export class BlogCategoryRelationships {
    @PrimaryColumn({name:'blog_id'})
    blogId: number

    @PrimaryColumn({name:'category_id'})
    categoryId: string
}
