const express = require("express");
const app = express();
const cors = require("cors");
const con = require("./conn");
const { error } = require("console");
const port = process.env.PORT || 3003;

app.use(express.json());
app.use(cors());

app.post("/Signin", (req, res) => {
    const data = req.body;
    con.query("INSERT INTO sstu SET?",data,(error,result)=>{
        if(error)
        {
            res.send("error in connection api")
        }
        else
        {
            res.send(result)
        }
    })
});

app.listen(port, () => {
    console.log(`server is running at ${port}`);
})