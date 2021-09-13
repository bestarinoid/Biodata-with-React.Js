const {Client} = require('pg')

const client = new Client ({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "password",
    database: "biodata"
})

client.connect();

client.query(`SELECT * FROM bio`, (err, res)=>{
    if(!err){
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    client.end;
})