var mysql=require('mysql');

var client = mysql.createConnection({
    host:'127.0.0.1', // ('127.0.0.1' or 'localhost' both works)
    user:'jay',
    database: 'jay',
    password:'password' // password required
})

// client.query('USE jay'); // USE 'SCHEMA NAME'
client.query('SELECT * FROM users', function(error, result, fields){
    if(error){
        console.log("error");
    } else {
        console.log(result);
    }
});
