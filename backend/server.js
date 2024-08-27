const express = require('express')
const mysql2 = require('mysql2')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'details'
});

app.listen(8081, () => {
    console.log('Listening...');
})