const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'thi_cuoi_ki',
});

app.post('/create',(req,res)=>{
    const name = req.body.name;
    const quantity = req.body.quantity;

    db.query("INSERT INTO product (name,quantity) VALUES (?,?)",[name,quantity],(err,res) => {
        if (err) {
            console.log(err)
        }else{
            res.send("Add success")
        }
    }
    );
})

app.listen(3001, ()=>{
    console.log("chay tren 3001 r ne");
});

