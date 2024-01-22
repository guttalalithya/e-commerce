const express = require('express')
const path = require('path');
const cors = require('cors')

const uploadImagesAndUpdateMongoDB = require('./Cloudinary/ImageUpload');
const getproducts = require('./Mongodb/GetProductData')




const app = express();

app.use(cors({
    origin:'http://localhost:3000'
}))
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/uploaddata',(req,res)=>{
    uploadImagesAndUpdateMongoDB();
})


app.get('/getproducts',async(req,res)=>{
    var data = await getproducts();
    res.send(data)
})



app.listen(3030,()=>{
    console.log('server started')
})

