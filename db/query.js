const knex = require('../db/knex/knex')

const query = async (table, data) => {
    const result = [];
    for await (const query of data) {
        result.push(await knex(table).insert(query,['*']));
    }
    return result;
}

module.exports = { query };