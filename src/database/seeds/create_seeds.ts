import Knex from 'knex';
import { variables } from '../../helpers/variables';

export const seed = async (knex: Knex) => {
  await knex(variables.tableNameItem).insert([
    { title: 'Làmpadas', image: 'lampadas.svg' },
    { title: 'Pilhas e Baterias', image: 'baterias.svg' },
    { title: 'Papéis e Papelão', image: 'papeis-papelao.svg' },
    { title: 'Resíduos Eletrônicos', image: 'eletronicos.svg' },
    { title: 'Resíduos Orgânicos', image: 'organicos.svg' },
    { title: 'Óleo de Cozinha', image: 'oleo.svg' }
  ])
}