const express = require("express");
const PORT = process.env.PORT || 3000;
const CakeName = require("./Schema");
const app = express();

require("./conn");

app.use(express.json());


app.get("/", (req, res) => {
    res.send("hello world");
})

app.post("/cake", async(req, res) => {
    const newCake = new CakeName(req.body)
    const Cake = await newCake.save();
    console.log('new cake', newCake);
    console.log(Cake);
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
});
