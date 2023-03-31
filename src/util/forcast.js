const { json } = require('express')
const request = require('request')
const forcast =((latetude,longetud,callback)=>{
    
    const URL='https://api.weatherbit.io/v2.0/current?&key=4d09605840284ab4874d3f0bb45315a4&include=minutely&lat='+latetude+'&lon='+longetud
     
    request({url: URL ,json:true},(error,{body})=>{
                if(error)
                {
                      callback('unanabal tp to connect whether service',undefined)
                } else if(body.error)
                {
                      callback('anabal to search try diffrent city name',undefined)
                } else
                {
                    callback(undefined,{
                        
                        temp: body.data[0].app_temp
                        
                    
                    })
                    
                }
    
          
    

   })  
})
module.exports=forcast