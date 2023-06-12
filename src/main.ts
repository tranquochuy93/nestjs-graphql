import { env } from '~config/env.config';
import { Bootstrap } from '~core/bootstraps/bootstraps'; // Should be on top

env.ROOT_PATH = __dirname;

async function startApp() {
    const bootstrap = new Bootstrap();
    await bootstrap.initApp();
    bootstrap.initPipes();
    const document = bootstrap.buildSwagger();
    await bootstrap.buildRedoc(document);
    bootstrap.initStaticAsset();
    await bootstrap.start();
}

startApp()
    .then(() => console.log('Init app success'))
    .catch(console.error);
