import { Categories } from './controllers';


const Routes: any = [
  {
    method: 'GET',
    path: '/category',
    handler: (req: any, res: any): object => Categories.getData(req, res),
  },
  {
    method: 'POST',
    path: '/category/add',
    handler: (req: any, res: any): object => Categories.insertData(req, res),
  },
  {
    method: 'POST',
    path: '/category/delete',
    handler: (req: any, res: any): object => Categories.deleteData(req, res),
  },
];

export default Routes;