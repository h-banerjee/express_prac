const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("let's start");
})
    //  multiply server
app.get("/multiply",(req,res)=>{
    let a=req.query.a;
    let b=req.query.b;
    let result = a*b;
    res.json({
        result:result
    })
})
// addtion server

app.get("/addition",(req,res)=>{
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);
    let result = a+b;
    res.send(result.toString());        // it gives only string formate value
})
// substraction server
app.get("/substraction",(req,res)=>{
    let a =parseInt(req.query.a);
    let b= ParseInt(req.query.b);
    let result = a-b;
    res.send(result.toString());
}
)
//division server
app.get("/division",(req,res)=>{
    let a = req.query.a;
    let b = req.query.b;
    let result = a/b;
    res.json({
        ans:result
    })
})

app.listen(4200);


