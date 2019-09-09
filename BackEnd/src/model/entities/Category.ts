import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, OneToMany } from 'typeorm';
import { Book } from './Book';

@Entity()
export class Category {

  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({unique : true})
  name: string;

  @ManyToMany(() => Book, book => book.categories)
  books: Book[];
}