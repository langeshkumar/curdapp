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

app.get('/', (req, res) => {
    const sql = 'SELECT * FROM employee';
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    })
})

app.post('/create', (req, res) => {
    const sql = "INSERT INTO employee (`emp_name`, `emp_desc`, `salary`, `branch_id`) VALUES (?, ?, ?, ?)";
    db.query(sql, [req.body.name, req.body.position, req.body.salary, req.body.branch], (err, result) => {
        if (err) return res.json(err);
        return res.json({ create: true });
    })
})

app.get('/view/:id', (req, res) => {
    const sql = "SELECT * FROM employee WHERE emp_id = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    })
})

app.put('/update/:id', (req, res) => {
    const sql = "UPDATE employee SET `emp_name` = ?, `emp_desc` = ?, `salary` = ?, `branch_id` = ? WHERE `emp_id` = ?";
    const id = req.params.id;

    db.query(sql, [req.body.name, req.body.position, req.body.salary, req.body.branch, id], (err, result) => {
        if (err) return res.json(err);
        return res.json({ update: true });
    })
})

app.delete('/delete/:id', (req, res) => {
    const sql = "DELETE FROM employee WHERE emp_id = ?"
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if (err) return res.json(err);
        return res.json({ delete: true });
    })
})

app.listen(8081, () => {
    console.log('Listening...');
})