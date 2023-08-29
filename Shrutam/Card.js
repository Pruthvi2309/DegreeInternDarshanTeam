const express=require('express');
const app=express();
const con=require("./confignew");
const cors=require('cors');
app.use(express.json());

 app.use(cors());

 
app.get("/shirt",(req,res)=>{
    const query = "Select * from newshirt";
    con.query(query,(err,result)=>{
        if(err)
        {
            res.send("table connection error")
        }
        else
        {
            console.log("data received");
            res.send(result)
        }
    })
});

app.listen(4000); 