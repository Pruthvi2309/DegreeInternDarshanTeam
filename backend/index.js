const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
    user: 'root',
    host:'localhost',
    password:'',
    database:'cake'
})

app.post('/register',(req,res)=>{
    const name = req.body.name;
    const bday = req.body.bday;
    const email = req.body.email;
    const phone = req.body.phone;
    const password = req.body.password;

    con.query("INSERT INTO signup (name, bday, email, phone, password) VALUES (?, ?, ?, ?, ?)",[name, bday, email, phone, password]),
    (err, result) => {
        if(result){
            res.send(result);
        }
        else
        {
            res.send({message:"Enter correct asked details"})
        }
    }
})

app.post('/login',(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    con.query("SELECT * FROM signup WHERE email = ? AND password = ?",[email, password]),
    (err, result) => {
        if(err){
            req.setEncoding({err: err});
        }
        else
        {
           if(result.length > 0){
            res.send(result);
           }
           else{
            res.send({message:"Wrong username or password"});
           }
        }
    }
})


app.listen(3000, ()=>{
    console.log("Running on port 3000");
})