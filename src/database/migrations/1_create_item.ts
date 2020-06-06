import Knex from 'knex'

const tableName = 'item';

export const up = async (knex: Knex) => {
  return knex.schema.createTable(tableName, table => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('image').notNullable();
  })
};

export const down = async (knex: Knex) => {
  return knex.schema.dropTable(tableName)
};