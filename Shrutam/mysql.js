// const express = require('express');
// const mysql = require('mysql');

// const app = express();
// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "shrutamdb"
// })

// app.get("/shirts", (req, res) => {
//     const sql = "SELECT * FROM shirts";
//     db.query(sql, (err, data)=>{
//         if(err) return res.json("Error");
//         return res.json(data);
//     })
// })

// app.listen(3000,()=>{
//     console.log("Connected");

// })
const express = require('express');
const mysql = require('mysql');

const app = express();
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "shrutamdb"
});

db.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err);
        return;
    }
    console.log("Connected to the database!");
});

app.get("/hello", (req, res) => {
    const sql = "SELECT * FROM hello";
    db.query(sql, (err, data) => {
        if (err) {
            console.error("Error querying the database:", err);
            return res.status(500).json({ error: "An error occurred while fetching data." });
        }
        return res.json(data);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
