const scrapping = require('../utils/scrapping');
const { query } = require('../../db/query');


const getScrapp = async (req, res) => {
    const data = await scrapping();
    res.send(await query('INVOICES', data))
}

module.exports = { getScrapp };