import { Books } from './controllers';


const Routes: any = [
  {
    method: 'GET',
    path: '/book',
    handler: (req: any, res: any): object => Books.getData(req, res),
  },
  {
    method: 'POST',
    path: '/book/add',
    handler: (req: any, res: any): object => Books.insertData(req, res),
  },
  {
    method: 'POST',
    path: '/book/delete',
    handler: (req: any, res: any): object => Books.deleteData(req, res),
  },
  {
    method: 'POST',
    path: '/book/edit',
    handler: (req: any, res: any): object => Books.editData(req, res),
  },
];

export default Routes;