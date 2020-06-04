import express from 'express';

import mainRoutes from './routers/main.routes';
import usersRoutes from './routers/users.routes';

const app = express();
const port = process.env.port || 8080;

app.use(mainRoutes);
app.use(usersRoutes)

app.listen(port, () => {
    console.log(`Servidor local rodando em http://localhost:${port}`);
})