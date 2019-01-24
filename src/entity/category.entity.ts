import { Entity, Column, PrimaryGeneratedColumn, OneToMany, UpdateDateColumn ,OneToOne,CreateDateColumn} from 'typeorm';

@Entity('category')
export class Category {
    @PrimaryGeneratedColumn({name: 'category_id'})
    categoryId: number

    @Column('varchar',{name: 'category_name', length:'200'})
    categoryName: string

    @CreateDateColumn({name: 'created_at'})
    createdAt: string;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: string;
}
