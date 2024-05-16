//const { name } = require('ejs');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-comm');
const productSchema = new mongoose.Schema({
    name:String,
    price: Number,
    brand: String,
    category:String
});

const saveInDb = async ()=>{
    const product = mongoose.model('products', productSchema);
    let data = new product({
        name: "max 100",
        price: 200,
        brand: 'maxx',
        category: 'mobile'
    });

    const result = await data.save();
    console.log("saved");
}
//saveInDb();
const updateInDB = async()=>{
    const product = mongoose.model('products',productSchema);
    let data = await product.updateOne(
        {name:"max 100"},
        {
            $set: {price: 1111, name:'max pro'}
        }
    )
    console.log(data);
    
}

//updateInDB();

const deleteInDB = async ()=>{
    const product = mongoose.model('products',productSchema);
    let data = await product.deleteOne({name:'m8'})
    console.log(data);
}

//deleteInDB();

const findInDB = async ()=>{
    const product = mongoose.model('products', productSchema);
    let data = await product.find({name:'max pro'});
    console.log(data);
}

findInDB();