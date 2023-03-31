
const https = require('https')
const url  = 'https://api.weatherbit.io/v2.0/current?&key=9608dbaa79604aa2846c6e6d33981b63&include=minutely&lat=19&lon=72'
const request = https.request(url,(Response)=>{
            let data = ''
            Response.on('data',(chank)=>{
                data = data+chank.toString()
                
            })
            Response.on('end',()=>{
                const json = JSON.parse(data)
                console.log(json) 
            })
                
                 
            
})
request.on('error',(error)=>{
                 console.log('an error',error)
})
request.end()