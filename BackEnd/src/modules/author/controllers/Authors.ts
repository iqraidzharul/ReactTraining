import {  getConnection } from "typeorm";
import { HttpResponse, sha256, generateToken } from '../../../utilities';
import { Author } from "../../../model/entities/Author";
import { Book } from "../../../model/entities/Book";

class Authors {
  static getData = async (req: any, res: any): Promise<object> => { // eslint-disable-line @typescript-eslint/no-unused-vars 

    let author;
    try {
      const AuthorRepository = getConnection().getRepository(Author);
      author = await AuthorRepository.find({relations : ['books']});

      return HttpResponse(200, author);
    } catch (e) {
      console.log(`error at get user data with error: ${e}`);
      return { res: `error at get user data with error: ${e}` };
    }
  }

  static insertData = async (req: any, res: any): Promise<object> => { // eslint-disable-line @typescript-eslint/no-unused-vars 

    try {
      let newAuthor = new Author();
      newAuthor.name = req.payload.name;
      newAuthor.birthDate = req.payload.birthDate;

      if(req.payload.books){
        const BookRepository = getConnection().getRepository(Book);
        const books = new Array;
        for(let i=0; i < req.payload.books.length; i++){
          const book = await BookRepository.findOne({code: req.payload.books[i]});
          if(book) books[i] = book;
        }
        newAuthor.books = books;
      }

      const AuthorRepository = getConnection().getRepository(Author);
      await AuthorRepository.save(newAuthor);

      const author = await AuthorRepository.findOne({
        where: {
          name: req.payload.name,
        },
      });
      if (author) return HttpResponse(200, author);
      return HttpResponse(204, {});

    } catch (error) {
      console.log(error);
      if (error.message) return HttpResponse(400, error.message);
      return HttpResponse(500, error);
    }
  }

  static deleteData = async (req: any, res: any): Promise<object> => { // eslint-disable-line @typescript-eslint/no-unused-vars 

    try {
      const AuthorRepository = getConnection().getRepository(Author);
      const author = await AuthorRepository.findOne({where: { name: req.payload.name}});
      if(author){
        await AuthorRepository.delete(author);
        return res.response(HttpResponse(200, "author deleted"));

      }else{
        return res.response(HttpResponse(200, "author not found"));
      }
    } catch (e) {
      console.log(`error at get user data with error: ${e}`);
      return { res: `error at get user data with error: ${e}` };
    }
  }

  static editData = async (req: any, res: any): Promise<object> => { // eslint-disable-line @typescript-eslint/no-unused-vars 

    try {
      const AuthorRepository = getConnection().getRepository(Author);
      const author = await AuthorRepository.findOne({
        where: {
          name: req.payload.name,
        },
      });
      if(author){
        author.name = req.payload.name;
        author.birthDate = req.payload.birthDate;

        if(req.payload.books){
          const BookRepository = getConnection().getRepository(Book);
          const books = new Array;
          for(let i=0; i < req.payload.books.length; i++){
            const book = await BookRepository.findOne({code: req.payload.books[i]});
            if(book) books[i] = book;
          }
          author.books = books;
        }
        await AuthorRepository.save(author);
        return HttpResponse(200, author);
      }else{
        return HttpResponse(204, {});
      }
    } catch (error) {
      console.log(error);
      if (error.message) return HttpResponse(400, error.message);
      return HttpResponse(500, error);
    }
  }
}

export default Authors;