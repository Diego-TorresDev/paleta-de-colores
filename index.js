const mysql      = require('mysql');

const connection = mysql.createConnection({

  host     : 'pintuco.ca4mymnxbdq2.us-east-1.rds.amazonaws.com',

  user     : 'admin',

  password : 'P1ntuc0B4s3d3d4t0s',

  database : 'abanicodecolores.pintuco.com2'

});

 

connection.connect();




console.log("Comienza")

connection.query(`SELECT * FROM upload_excel_colombia uec WHERE gama = 'Rojos' GROUP BY codigo_color ; `, function (error, results, fields) {

    if (error) throw error;

    console.log('The solution is: ', results);

  })




connection.end();