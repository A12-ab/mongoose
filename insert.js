const dbConnect = require('./mongodb');

const insert = async ()=>{
    const db = await dbConnect();
    const result = await db.insertOne(
        {name:'m 20',brand:'vivo',price:540,category:'mobile'}
    )
    if(result.acknowledged){
        console.log("data inserted");
    }
}
insert();