// const mysql = require('mysql');
// const express = require('express');

// var app = express();
// const bodyparser = require('body-parser')

// app.use(bodyparser.json());

// var mysqlConnection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Eshu8759@',
//     database: 'EmployeeDB',
//     multipleStatements: true
// });

// mysqlConnection.connect((err) => {
//     if (!err)
//         console.log('DB connection succ');
//     else
//         console.log('DB connection failed \n Error : ' + JSON.stringify(err));
// })

// app.listen(3000, () => console.log('Express server is running at post no: 3000'));

// app.get('/employees', (req, res) => {
//     mysqlConnection.query('SELECT * FROM Employee', (err, rows, fields) => {
//         if (!err)
//             res.send(rows);
//         else
//             console.log(err);
//     })
// })

// // Get an employee
// app.get('/employees/:id', (req, res) => {
//     mysqlConnection.query('SELECT * FROM Employee WHERE EmpID = ?',  (err, rows, fields) => {
//         if (!err)
//             res.send(rows);
//         else
//             console.log(err);
//     })
// })

// // Delete an employee

// app.delete('/employees/:id', (req, res) => {
//     mysqlConnection.query('DELETE FROM Employee WHERE EmpID = ?', (err, rows, fields) => {
//         if (!err)
//             res.send('Delete Permanently.');
//         else
//             console.log(err);
//     })
// })

// //Insert an employee
// app.post('/employees', (req, res) => {
//     let emp = req.body;
//     var sql = `INSERT INTO Employee(Name,EmpCode,Salary) values ("${emp.Name}", "${emp.EmpCode}", "${emp.Salary}")`;
//     console.log(sql)
//     mysqlConnection.query(sql, (err, rows, fields) => {
//         if (!err)
//             res.send(rows);
//         else
//             console.log(err);
//     })
// })

// //Update an employee
// app.put('/employees/:id', (req, res) => {
//     let emp = req.body;
//     var sql = `UPDATE Employee SET Name="${emp.Name}",EmpCode="${emp.EmpCode}",Salary="${emp.Salary}" WHERE EmpID="${emp.EmpID}"`;
//     console.log(sql)
//     mysqlConnection.query(sql, (err, rows, fields) => {
//         if (!err)
//             res.send('Update Successfully');
//         else
//             console.log(err);
//     })
// });