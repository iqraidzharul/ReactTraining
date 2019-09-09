import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, OneToMany } from 'typeorm';
import { Book } from './Book';

@Entity()
export class Author {

  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  name: string;

  @Column()
  birthDate: Date;

  @ManyToMany(() => Book, book => book.authors)
  books: Book[];
}