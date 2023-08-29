const mysql=require('mysql');
const con =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database: "aesthetics"

});
con.connect((err)=>{
    if(err)
    {
        console.warn("connection error")
    }else{
        console.log("success");
    }
})
module.exports=con;