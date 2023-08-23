const express = require('express');
require('dotenv').config()
const knex = require('../db/knex/knex')
const createSchema = require('../db/createSchema');
const app = express();
const port = process.env.PORT || 3001;

async function assertDatabaseConnection() {
    return knex.raw('select 1+1 as result')
        .catch((err) => {
            console.log('[Fatal] Failed to establish connection to database! Exiting...');
            console.log(err);
            process.exit(1);
        });
}

//  middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// routes
app.use(require('./routes/index'));


const init = async() => {
    await assertDatabaseConnection();
    createSchema.recreateSchema(knex,function (err) {
        if (err) {
          console.error('create database schema error: %s', err.toString());
        }
      })
    app.listen(port);
    console.log(`App running on ${port}`);
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init()

module.exports = init;