import Knex from 'knex'

const tableName = 'point';

export const up = async (knex: Knex) => {
  return knex.schema.createTable(tableName, table => {
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatshapp').notNullable();
    table.string('latitude').notNullable();
    table.string('longitude').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  })
};

export const down = async (knex: Knex) => {
  return knex.schema.dropTable(tableName)
};