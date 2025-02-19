const express = require('express'); 
const mongoose = require('mongoose'); 
const app = express();
const dotenv = require('dotenv');
dotenv.config(); 
const PORT = process.env.PORT || 3000;
const DB = process.env.MONGO_URI; 
// routers 
const vendingzonerouter = require("./routes/vendingroutes"); 
// middlewares
app.use(express.json()); 
app.use(vendingzonerouter); 

// connection to mongodb 
mongoose.connect(DB).then( () => {
    console.log("Connection successful "); 
}).catch( (err) => {
    console.log(err); 
})

// testing server 
app.get('/', (req, res) => {
    res.send("Hello World"); 
}); 

// listen to port
app.listen(PORT , "0.0.0.0" , ()=> {
    console.log(`Server is running on port ${PORT}`); 
})

