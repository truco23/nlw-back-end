import connection from "../database/connections";

export const queryAll = (table: string) => connection(table).select('*')