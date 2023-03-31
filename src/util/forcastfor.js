const request = require('request')
const forcastyo =((latetude,longetud,yo)=>{
    
    const url= 'https://api.weatherbit.io/v2.0/forecast/daily?&NC&key=4d09605840284ab4874d3f0bb45315a4&lat='+latetude+'&lon='+longetud
request({url:url ,json:true},(error,{body})=>{
    if(error)
    {
          yo('unanabal tp to connect whether service',undefined)
    } else if(body.error)
    {
          yo('anabal to search try diffrent city name',undefined)
    } else
    {
        yo(undefined,
            
            {
            demo: ['date : '+body.data[0].datetime+' tempreture : '+body.data[0].temp],
            description : body.data[0].weather.description,
            icon : body.data[0].weather.icon,
            Code : body.data[0].weather.Code
            }

            
        
        )
        
    }
})
})  

module.exports=forcastyo