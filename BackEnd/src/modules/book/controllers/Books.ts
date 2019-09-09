import {  getConnection } from "typeorm";
import { HttpResponse, sha256, generateToken } from '../../../utilities';
import { Book } from "../../../model/entities/Book";
import { Author } from "../../../model/entities/Author";
import { Category } from "../../../model/entities/Category";

class Books {
  static getData = async (req: any, res: any): Promise<object> => { // eslint-disable-line @typescript-eslint/no-unused-vars 

    let book;
    try {
      const BookRepository = getConnection().getRepository(Book);
      book = await BookRepository.find({relations: ["authors", "categories", "comments"]});
      return HttpResponse(200, book);
    } catch (e) {
      console.log(`error at get book data with error: ${e}`);
      return { res: `error at get book data with error: ${e}` };
    }
  }

  static insertData = async (req: any, res: any): Promise<object> => { // eslint-disable-line @typescript-eslint/no-unused-vars 

    try {
      let newBook = new Book();
      newBook.code = req.payload.code;
      newBook.title = req.payload.title;
      newBook.price = req.payload.price;
      newBook.publisher = req.payload.publisher;
      newBook.releaseDate = req.payload.releaseDate;
      if(req.payload.authors){
        const AuthorRepository = getConnection().getRepository(Author);
        const authors = new Array;
        for(let i=0; i < req.payload.authors.length; i++){
          const author = await AuthorRepository.findOne({name: req.payload.authors[i]});
          if(author) authors[i] = author;
        }
        newBook.authors = authors;
      }
      if(req.payload.categories){
        const CategoryRepository = getConnection().getRepository(Category);
        const categories = new Array;
        for(let i=0; i < req.payload.categories.length; i++){
          const category = await CategoryRepository.findOne({name: req.payload.categories[i]});
          if(category) categories[i] = category;
        }
        newBook.categories = categories;
      }

      const BookRepository = getConnection().getRepository(Book);
      await BookRepository.save(newBook);

      const book = await BookRepository.findOne({
        where: {
          code: req.payload.code,
        },
      });
      if (book) return HttpResponse(200, book);
      return HttpResponse(204, {});

    } catch (error) {
      console.log(error);
      if (error.message) return HttpResponse(400, error.message);
      return HttpResponse(500, error);
    }
  }

  static deleteData = async (req: any, res: any): Promise<object> => { // eslint-disable-line @typescript-eslint/no-unused-vars 

    try {
      const BookRepository = getConnection().getRepository(Book);
      const book = await BookRepository.findOne({where: { code: req.payload.code}});
      if(book){
        await BookRepository.delete(book);
        return res.response(HttpResponse(200, "Book deleted"));

      }else{
        return res.response(HttpResponse(200, "Book not found"));
      }
    } catch (e) {
      console.log(`error at get user data with error: ${e}`);
      return { res: `error at get user data with error: ${e}` };
    }
  }

  static editData = async (req: any, res: any): Promise<object> => { // eslint-disable-line @typescript-eslint/no-unused-vars 

    try {
      const BookRepository = getConnection().getRepository(Book);

      const book = await BookRepository.findOne({
        where: {
          code: req.payload.code,
        },
      });
      if(book){
        book.title = req.payload.title;
        book.price = req.payload.price;
        book.publisher = req.payload.publisher;
        book.releaseDate = req.payload.releaseDate;

        if(req.payload.authors){
          const AuthorRepository = getConnection().getRepository(Author);
          const authors = new Array;
          for(let i=0; i < req.payload.authors.length; i++){
            const author = await AuthorRepository.findOne({name: req.payload.authors[i]});
            if(author) authors[i] = author;
          }
          book.authors = authors;
        }
        await BookRepository.save(book);
        return HttpResponse(200, book);
      }
      else{
        return HttpResponse(204, {});
      }
    } catch (error) {
      console.log(error);
      if (error.message) return HttpResponse(400, error.message);
      return HttpResponse(500, error);
    }
  }
}

export default Books;