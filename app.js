const express = require('express');
const app = express();


app.use(express.static('public'));


app.listen(4000, ()=>{
    console.log('Servidor  4000 funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html')
} )
