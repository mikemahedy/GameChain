var Connection = require('tedious').Connection;  
var config = {  
    server: 'localhost',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: 'sa', //update me
            password: 'm4h3mic4BA1L'  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: true,
        database: 'MLB'  //update me
    }
};  
var connection = new Connection(config);  
connection.on('connect', function(err) {  
    // If no error, then good to proceed.  
    console.log("Connected");  
    executeStatement(addr);  
});  

connection.connect();

var Request = require('tedious').Request;  
var TYPES = require('tedious').TYPES;  

function executeStatement(addr) {  
    request = new Request(`"select * from NYY.Games where wallet_address='${addr}';"`, function(err) {  
    if (err) {  
        console.log(err);}  
    });  
    var result = "";  
    request.on('row', function(columns) {  
        columns.forEach(function(column) {  
          if (column.value === null) {  
            console.log('NULL');  
          } else {  
            result+= column.value + " ";  
          }  
        });  
        console.log(result);  
        result ="";  
    });  

    request.on('done', function(rowCount, more) {  
    console.log(rowCount + ' rows returned');  
    });  
    
    // Close the connection after the final event emitted by the request, after the callback passes
    request.on("requestCompleted", function (rowCount, more) {
        connection.close();
    });
    connection.execSql(request);  
}  