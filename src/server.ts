import express from "express";

import { staticConfigUpload } from "./config/staticFiles";
import { variables } from "./helpers/variables";
import mainRoutes from "./routers/main.routes";
import itemRoutes from "./routers/item.routes";
import pointRoutes from "./routers/point.routes";

const app = express();
const port = process.env.port || variables.port;

app.use(express.json());
app.use(`/${variables.urlUpload}`, staticConfigUpload);
app.use(pointRoutes);
app.use(mainRoutes);
app.use(itemRoutes);

app.listen(port, () => {
  console.log(`Servidor local rodando em ${variables.localHost}:${port}`);
});
