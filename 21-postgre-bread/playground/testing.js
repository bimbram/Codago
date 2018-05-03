"use strict";
const { Pool } = require('pg')

const pool = new Pool(
{
    user: 'bim',
    host: 'localhost',
    database: 'breaddb',
    password: '12345',
    port: 5432,
})


pool.query("SELECT * FROM truefalse WHERE boolean = FALSE", (err, res) => {
  console.log(res.rows);
})
