const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.urlencoded({
    extended:true
}));

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'theband'
})

connection.connect((error) => {
    if(error)
        throw error;
    console.log('Connected to the database');
})

app.get('/get-allCustomer', (req,res) => {
    const sqlQuerry = 'SELECT * from customers';
    connection.query(sqlQuerry,(error, results) => {
        if(error)
            throw error;
        res.send(JSON.stringify({'status':200, 'error':null, 'response': {customers: results}}))
    })
})

app.post('/add-customer', (req,res) => {
    const newCustomer = {
        firstname: req.body.name,
        lastname: req.body.lastname,
        bdate: req.body.bdate,
        phone: req.body.phone,
        email: req.body.email,
    };
    
    const sqlQuery = "INSERT INTO customers (firstname,lastname,bdate, email,phone) VALUES (?,?,?,?,?)";
    connection.query(sqlQuery, [newCustomer.firstname, newCustomer.lastname, newCustomer.bdate,
        newCustomer.email, newCustomer.phone,
    ], (error, results) => {
        if (error)
            throw error;
        res.send(JSON.stringify({
            "status": 200,
            "error": null,
            "response": "Customer ID : " + results.insertId + " created!"
        }))
    })
})
app.listen(5000, () => {
    console.log('Server is running on port 5000');
})