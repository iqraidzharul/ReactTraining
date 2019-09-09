import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, OneToMany } from 'typeorm';
import { Book } from './Book';

@Entity()
export class Comment {

  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  name: string;

  @Column()
  content: string;

  @ManyToOne(() => Book, book => book.comments)
  book: Book;
}