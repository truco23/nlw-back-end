import Knex from 'knex'
import { variables } from '../../helpers/variables';

export const up = async (knex: Knex) => {
  return knex.schema.createTable(variables.tableNameItem, table => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('image').notNullable();
  })
};

export const down = async (knex: Knex) => {
  return knex.schema.dropTable(variables.tableNameItem)
};