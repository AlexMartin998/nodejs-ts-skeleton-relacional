import { envs } from './shared/infrastructure/config';
import { AppRouter } from './shared/infrastructure/server/router';
import { Server } from './shared/infrastructure/server/server';


const main = async () => {

  // Avoid hidden dependencies
  const server = new Server({
    port: envs.PORT,
    // public_path: envs.PUBLIC_PATH,
    router: AppRouter.routes,
  });


  server.start();

};



(async () => {

  main();

})();
