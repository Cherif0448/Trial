const express=require('express')
const hbs=require('hbs')
const app=express()

hbs.registerPartials('D:/node course practical/Trial/partials')


app.set('view engine','hbs')
app.use(express.static('D:/node course practical/Trial/public'))


app.get("",function(req,res)
{
    res.render('Main')
})

app.get("/Help",function(req,res)
{
    res.render('Help')
})


app.listen(3000,function()
{
    console.log('server running!')
})