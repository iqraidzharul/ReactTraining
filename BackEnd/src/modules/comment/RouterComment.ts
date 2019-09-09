import { Comments } from './controllers';


const Routes: any = [
    {
      method: 'GET',
      path: '/comment',
      handler: (req: any, res: any): object => Comments.getData(req, res),
    },
    {
      method: 'POST',
      path: '/comment/add',
      handler: (req: any, res: any): object => Comments.insertData(req, res),
    },
    {
      method: 'POST',
      path: '/comment/edit',
      handler: (req: any, res: any): object => Comments.editData(req, res),
    },
    {
      method: 'POST',
      path: '/comment/delete',
      handler: (req: any, res: any): object => Comments.deleteData(req, res),
    },
];

export default Routes;