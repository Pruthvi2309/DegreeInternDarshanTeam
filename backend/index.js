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


//Data Enter through Signup Page
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


//Data Enter through ContactUS Page
app.post('/contact',(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    con.query("INSERT INTO contact (name, email, message) VALUES (?, ?, ?)",[name, email, message]),
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

//Data fetch and login in wesbite using Login Page
app.post('/login',(req, res) => {
    const {email , password} = req.body;

    con.query('SELECT * FROM signup WHERE email = ? AND password = ?',[email, password], (error, result) => {
        if(error){
            res.send({success: false, message: 'Error in connecting to API'});
        }
        else {
            if(result.length === 1){
                res.send({success: true, message: 'Login Successful'});
            }
            else {
                res.send({success: false, message: 'Invalid credentials'});
            }
        }
    });
});

//Fetch data from database in product page
app.get('/prodi',(req,res) => {
    const query = "SELECT * FROM product";
    con.query(query, (error, results) => {
        if(error){
            console.log('Error executin MySQL query:', error);
            res.send({ status: 'error', message: 'Failed to fetch data'});
        }
        else{
            console.log('Data retrived successfully');
            res.send(results)
        }
    });
});


app.listen(3000, ()=>{
    console.log("Running on port 3000");
})