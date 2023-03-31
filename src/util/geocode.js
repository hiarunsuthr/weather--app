const request = require('request')

const geocode =((addreess,callback)=>{
      const URL='https://api.mapbox.com/geocoding/v5/mapbox.places/'+addreess+'.json?access_token=pk.eyJ1IjoibWpzdXRoYXIiLCJhIjoiY2tveDF1M2d6MDRpNjJybWMzdGJ1MTFrZSJ9.1kqty9ui0yYomx1lglVafA'
      request({url: URL ,json:true},(error,{body})=>{
                  if(error)
                  {
                        callback('unanabal tp to connect whether service',undefined)
                  } else if(body.error)
                  {
                        callback('anabal to search try diffrent city name',undefined)
                  } else
                  {  callback(undefined,{ 
                     
  
                      latetude:body.features[0].center[1],
                      longetud : body.features[0].center[0],
                      location :body.features[0].place_name

                })
                      //console.log(undefined,'lat '+process.body.data[0].lat,'\nlon '+process.body.data[0].lon,'\n'+process.body.data[0].city_name)
                }
    
          
    })
})
module.exports = geocode