import {  getConnection } from "typeorm";
import { HttpResponse, sha256, generateToken } from '../../../utilities';
import { Category } from "../../../model/entities/Category";

class Categories {
  static getData = async (req: any, res: any): Promise<object> => { // eslint-disable-line @typescript-eslint/no-unused-vars 

    let category;
    try {
      const CategoryRepository = getConnection().getRepository(Category);
      category = await CategoryRepository.find();

      return HttpResponse(200, category);
    } catch (e) {
      console.log(`error at get user data with error: ${e}`);
      return { res: `error at get user data with error: ${e}` };
    }
  }

  static insertData = async (req: any, res: any): Promise<object> => { // eslint-disable-line @typescript-eslint/no-unused-vars 

    try {
      let newCategory = new Category();
      newCategory.name = req.payload.name;
      
      const BookRepository = getConnection().getRepository(Category);
      await BookRepository.save(newCategory);

      const category = await BookRepository.findOne({
        where: {
          name: req.payload.name,
        },
      });
      if (category) return HttpResponse(200, category);
      return HttpResponse(204, {});

    } catch (error) {
      console.log(error);
      if (error.message) return HttpResponse(400, error.message);
      return HttpResponse(500, error);
    }
  }

  static deleteData = async (req: any, res: any): Promise<object> => { // eslint-disable-line @typescript-eslint/no-unused-vars 

    try {
      const CategoryRepository = getConnection().getRepository(Category);
      const category = await CategoryRepository.findOne({where: { name: req.payload.name}});
      if(category){
        await CategoryRepository.delete(category);
        return res.response(HttpResponse(200, "category deleted"));

      }else{
        return res.response(HttpResponse(200, "category not found"));
      }
    } catch (e) {
      console.log(`error at get user data with error: ${e}`);
      return { res: `error at get user data with error: ${e}` };
    }
  }
}

export default Categories;