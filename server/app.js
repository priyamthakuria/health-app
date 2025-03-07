const dotenv= require('dotenv');
dotenv.config();
const express = require('express');
const userRoutes= require('./routes/user.routes.js')
const cors= require('cors');
const app= express();
const path = require('path');
const connectTODB = require('./db/db')
connectTODB();
// const cookieParser = require('cookie-parser');
const postRoutes = require('./routes/post.routes');

app.use(cors());
// app.set('view engine','ejs');
app.use(express.json())
app.use (express.urlencoded({extended:true}))
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); 
// app.use(cookieParser())

app.use('/users',userRoutes)
app.use(postRoutes);

app.get('/',(req,res)=>{
    res.send('helloooo');
})
// const port = process.env.PORT || 5000;
const port =  5002
// const port = process.env.PORT;
app.listen(port, () => {
    console.log('server running on port', port);
});

module.exports= app;