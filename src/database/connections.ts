import knex from "knex";
import path from "path";
import { variables } from "../helpers/variables";

const connection = knex({
  client: `${variables.sqlite3}`,
  connection: {
    filename: path.resolve(__dirname, "database.sqlite"),
  },
  useNullAsDefault: true,
});

export default connection;
