import Knex from 'knex'
import { variables } from '../../helpers/variables';

export const up = async (knex: Knex) => {
  return knex.schema.createTable(variables.tableNamePointItem, table => {
    table.increments('id').primary();
    table.integer('point_id').notNullable().references('id').inTable('point');
    table.integer('item_id').notNullable().references('id').inTable('item');
  })
};

export const down = async (knex: Knex) => {
  return knex.schema.dropTable(variables.tableNamePointItem)
};