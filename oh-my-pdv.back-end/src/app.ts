import { app } from './main';

import router from './infra/routes';

const port = process.env.PORT || 8080;

app.use(router);

app.listen(port, () => {
  console.log(`🚀 Server is working...\nhttp://localhost:${port}`);
});
