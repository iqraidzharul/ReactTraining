/**
 * @author Dwi Setiyadi
 */

/* eslint-disable no-console */

import * as Hapi from '@hapi/hapi';
import 'dotenv/config';
import "reflect-metadata";
import { createConnection } from "typeorm";
import {
  Router,
} from '../config';
import Cors from '../config/Cors';

const App = async (): Promise<void> => {
  const server = new Hapi.Server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: { 
      cors: Cors,
    },
  });
  
  server.route(Router);

  await createConnection();

  await server.start();
  console.log(`\nServer Service running at: ${server.info.uri}\n\n`);
};

export default App;
