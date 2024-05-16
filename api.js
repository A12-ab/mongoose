const express = require('express');
const dbConnect = require('./mongodb');
const app = express();

app.use(express.json());

app.get('/', async (req,resp)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    //console.log(data);
   resp.send(data);
});

app.post('/',async (req,resp)=>{
    let data = await dbConnect();
    let result = data.insertOne(req.body);
    

    resp.send()
})

app.put("/",async (req,resp)=>{
    let data = await dbConnect();
    let result = data.updateOne(
        {name:req.body.name},
        {$set:req.body}
    )
    resp.send({result:"update"});
    //console.log(req.body);
})

app.listen(5000);