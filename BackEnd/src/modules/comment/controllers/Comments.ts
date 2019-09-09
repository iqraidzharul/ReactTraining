import {  getConnection } from "typeorm";
import { HttpResponse, sha256, generateToken } from '../../../utilities';
import { Comment } from "../../../model/entities/Comment";
import { Book } from "../../../model/entities/Book";

class Comments {
    static getData = async (req: any, res: any): Promise<object> => { // eslint-disable-line @typescript-eslint/no-unused-vars 

      let comment;
      try {
        const CategoryRepository = getConnection().getRepository(Comment);
        comment = await CategoryRepository.find();

        return HttpResponse(200, comment);
      } catch (e) {
        console.log(`error at get user data with error: ${e}`);
        return { res: `error at get user data with error: ${e}` };
      }
    }

    static insertData = async (req: any, res: any): Promise<object> => { // eslint-disable-line @typescript-eslint/no-unused-vars 
      try {
        if(req.payload.book){
          const BookRepository = getConnection().getRepository(Book);
          const book = await BookRepository.findOne({code : req.payload.book});

          if(book){
            let newComment = new Comment();
            newComment.name = req.payload.name;
            newComment.content = req.payload.content;
            newComment.book = book;

            const CommentRepository = getConnection().getRepository(Comment);
            await CommentRepository.save(newComment);
      
            const comment = await CommentRepository.findOne({
              where: {
                name: req.payload.name,
              },
            });
            if (comment) return HttpResponse(200, comment);
            return HttpResponse(204, {});
          }else{
            return HttpResponse(400, "Book not found");
          }
        }
        else{
          return HttpResponse(400, "Book required");
        }
      } catch (error) {
        console.log(error);
        if (error.message) return HttpResponse(400, error.message);
        return HttpResponse(500, error);
      }
    }

    static deleteData = async (req: any, res: any): Promise<object> => { // eslint-disable-line @typescript-eslint/no-unused-vars 

      try {
        const CommentRepository = getConnection().getRepository(Comment);
        const comment = await CommentRepository.findOne({where: { name: req.payload.name, content: req.payload.content}});
        if(comment){
          await CommentRepository.delete(comment);
          return res.response(HttpResponse(200, "comment deleted"));
        }else{
          return res.response(HttpResponse(200, "comment not found"));
        }
      } catch (e) {
        console.log(`error at get user data with error: ${e}`);
        return { res: `error at get user data with error: ${e}` };
      }
    }

    static editData = async (req: any, res: any): Promise<object> => { // eslint-disable-line @typescript-eslint/no-unused-vars 
      try {
        if(req.payload.book){
          const BookRepository = getConnection().getRepository(Book);
          const book = await BookRepository.findOne({code : req.payload.book});

          if(book){
            const CommentRepository = getConnection().getRepository(Comment);

            let comment = await CommentRepository.findOne({name: req.payload.name, content: req.payload.content});
            if(comment){
              comment.name = req.payload.name;
              comment.content = req.payload.content;
              comment.book = book;
              await CommentRepository.save(comment);
              return HttpResponse(200, comment);
            }
            return HttpResponse(204, {});
          }else{
            return HttpResponse(400, "Book not found");
          }
        }
        else{
          return HttpResponse(400, "Book required");
        }
      } catch (error) {
        console.log(error);
        if (error.message) return HttpResponse(400, error.message);
        return HttpResponse(500, error);
      }
    }
}

export default Comments;