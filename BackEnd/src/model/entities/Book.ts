import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, OneToMany, JoinTable } from 'typeorm';
import { Author } from "./Author";
import { Category } from './Category';
import { Comment } from './Comment';

@Entity()
export class Book {

  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ unique: true })
  code: string;

  @Column()
  title: string;

  @ManyToMany(() => Author, author => author.books)
  @JoinTable()
  authors: Author[];

  @Column()
  publisher: string;

  @Column()
  releaseDate: Date;

  @Column()
  price: number;

  @ManyToMany(() => Category, category => category.books)
  @JoinTable()
  categories: Category[];

  @OneToMany(() => Comment, comment => comment.book)
  comments: Comment[];
}