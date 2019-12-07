const express = require('express');
const app = express();

const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//body parser middleware
app.use(express.urlencoded({
    extended: true
}));

app.get('/',(req,res)=>{
    res.render('home.ejs')
})

app.post('/',(req,res)=>{
    console.log(req.body.name,req.body.stuff);

    res.render('nextpage.ejs',{
        name: req.body.name,
        stuff:req.body.age
    })
})

app.listen(process.env.PORT||3000,console.log('3000'))