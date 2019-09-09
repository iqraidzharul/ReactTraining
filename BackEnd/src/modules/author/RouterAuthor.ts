import { Author } from './controllers';


const Routes: any = [
  {
    method: 'GET',
    path: '/author',
    handler: (req: any, res: any): object => Author.getData(req, res),
  },
  {
    method: 'POST',
    path: '/author/add',
    handler: (req: any, res: any): object => Author.insertData(req, res),
  },
  {
    method: 'POST',
    path: '/author/delete',
    handler: (req: any, res: any): object => Author.deleteData(req, res),
  },
  {
    method: 'POST',
    path: '/author/edit',
    handler: (req: any, res: any): object => Author.editData(req, res),
  },
];

export default Routes;