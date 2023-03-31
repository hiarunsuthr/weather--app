const path = require('path')
const express = require('express')

const hbs = require('hbs')
const geocode = require('./util/geocode')
const forcast = require('./util/forcast')              
const forcasfor = require('./util/forcastfor')
const forcastyo = require('./util/forcastfor')
const app = express()
//path for express 
const publicdirectorypath = path.join(__dirname,'../public')
const viewspath = path.join(__dirname,'../views/yo')
const partialpath = path.join(__dirname,'../views/partial')

app.set('view engine','hbs')
app.set('views' , viewspath)
app.use(express.static(publicdirectorypath))
hbs.registerPartials(partialpath)
app.get('/',(req,res)=>{
    res.render('index',{
             title: 'weather app',
             name : ' the arun'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
             title: 'help',
             name : ' the arun'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
             title: 'about',
             name : ' the arun '
    })
})
app.get('/weather',(req,res)=>{
         if(!req.query.address)
         {
            return res.send({
                error: 'you must provide a address term'
            })
         }
         geocode(req.query.address,(error,{latetude,longetud,location}={})=>{
            if(error)
            {
                return console.log(error)
            }
            forcast(latetude,longetud,(error,{temp }={})=>{
                console.log(location)
                console.log(temp)
                
            
                console.log(latetude)
                console.log(longetud)
                forcastyo(latetude,longetud,(error,{demo,description,icon,code}={})=>{
                 
                    console.log(description)
                    
                 
                
                
        
    
    res.send({
        forcast : temp,
        d : description,
        i : icon,
        c : code,
        yo : demo,
        location,
        address : req.query.address,
        latetude: latetude,
        longetud: longetud
    })
    })
   })   
})
    
   

})
app.get('*',(req,res)=>{
    res.render('error',{
             title: 'error',
             name : 'arun',
             errormassag:'the page not found'
    })
})
   app.listen(3000,()=>{
    console.log('server is up on port 3000')
   })
   