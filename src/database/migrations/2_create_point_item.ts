import Knex from 'knex'

const tableName = 'pointItems';

export const up = async (knex: Knex) => {
  return knex.schema.createTable(tableName, table => {
    table.increments('id').primary();
    table.integer('point_id').notNullable().references('id').inTable('point');
    table.integer('item_id').notNullable().references('id').inTable('item');
  })
};

export const down = async (knex: Knex) => {
  return knex.schema.dropTable(tableName)
};