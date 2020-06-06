import express from 'express';

import mainRoutes from './routers/main.routes';
import usersRoutes from './routers/users.routes';
import { staticConfigUpload } from './config/staticFiles';
import { variables } from './helpers/variables';

const app = express();
const port = process.env.port || variables.port;

app.use(mainRoutes);
app.use(usersRoutes);
app.use(`/${variables.urlUpload}`, staticConfigUpload)

app.listen(port, () => {
    console.log(`Servidor local rodando em ${variables.localHost}:${port}`);
})