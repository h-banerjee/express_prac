const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("let's start");
})
    //  multiply server
app.get("/multiply",(req,res)=>{
    let a=req.query.a; // extracts the query parameter "a" from the request parameter 
    let b=req.query.b; // extracts the query parmeter "b" frmo the request parameter
    let result = a*b; //multiples "a" and "b"
    res.json({        // sends JSON response with the "result"
        result:result // the result is returned in JSON format
    })
})
// addtion server

app.get("/addition",(req,res)=>{
    let a = parseInt(req.query.a);     // Extracts and converts 'a' to an integer
    let b = parseInt(req.query.b);     // Extracts and converts 'b' to an integer
    let result = a+b;                   // Adds 'a' and 'b'
    res.send(result.toString());        // it gives only string formate value
})
// substraction server
app.get("/substraction",(req,res)=>{
    let a =parseInt(req.query.a);  // Parse 'a' parameter from query string to an integer
    let b= ParseInt(req.query.b);// Parse 'b' parameter from query string to an integer 
    let result = a-b; // Perform subtraction of 'a' and 'b'
    res.send(result.toString()); // Send the result as a string in the response
}
)
//division server
app.get("/division",(req,res)=>{
    let a = req.query.a; // Get 'a' from the query string
    let b = req.query.b; // Get 'b' from the query string
    let result = a/b; // Perform division of 'a' by 'b'
    res.json({
        ans:result // Return the result in a JSON response with key 'ans'
    })
})

app.listen(4200);


