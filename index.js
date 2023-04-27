const express = require('express');
const mysql = require('mysql');
const app = express();
const port  = 3000;

const connection = mysql.createConnection({
host : 'pintuco.ca4mymnxbdq2.us-east-1.rds.amazonaws.com',
user : 'admin',
password : 'P1ntuc0B4s3d3d4t0s',
database : 'abanicodecolores.pintuco.com2'
});

let results;
connection.connect();
console.log("Comienza")
    connection.query(`SELECT * FROM upload_excel_colombia uec WHERE gama = 'Rojos' and producto = 'Viniltex Advanced' GROUP BY codigo_color ;`, function (error, results, fields) {
    
    if (error) throw error;
        console.log('The solution is: ', results);
        app.get('/', (req, res) => {
            res.send(results);
        });
    });





app.get('/api/:color/:superficie', (req, res) => {
    const { color } = req.query;
    const { superficie } = req.query;

    res.json({
        color,
        superficie
    });
});


app.listen(port, () => {
    console.log(port);
})

