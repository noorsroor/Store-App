const express =require('express');
const cors = require('cors');
const axios= require('axios')

const app = express();
const PORT = 9002;
app.use(cors());
app.use(express.json()); 



app.get('/products/api', async (req,res)=> {
    try{
        const response= await axios.get("https://fakestoreapi.com/products");
        res.json(response.data);
    }catch(error){
        res.status(500).json({message: "Erorr fetching products"});
    }
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});