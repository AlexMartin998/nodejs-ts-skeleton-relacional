import { envs } from '../src/shared/infrastructure/config';
import { Server } from '../src/shared/infrastructure/server/server';

// // vamos a mocker todo el Server | tb util para mockear librerias externas
jest.mock('../src/shared/infrastructure/server/server.ts');



describe('[App]: Test suit', () => {

  it('it should work', async () => {
    await import('../src/app');

    expect(Server).toHaveReturnedTimes(1);
    expect(Server).toHaveBeenCalledWith({
      port: envs.PORT,
      router: expect.any(Function)
    });

    expect(Server.prototype.start).toHaveBeenCalledWith();
  });

});
