
console.log('clint side javascript file loaded ')
const address = document.querySelector('input')
const weather = document.querySelector('form')
const messageone = document.querySelector('#message-1')
const messagetwo = document.querySelector('#message-2')
const messagethree = document.querySelector('#message-3')
weather.addEventListener('submit',(e)=>{
    const city = address.value
      messageone.textContent = 'Loding....'
      messagetwo.textContent = ''
    fetch("http://localhost:3000/weather?address="+city).then((response)=>{
            
response.json().then((data)=>{
              if(data.error)
              {  const p = data.error
                messageone.textContent= p 
              }
              else
              {   const location = data.location 
                  const address = data.address
                  

                  messageone.textContent = data.location
                   messagetwo.textContent = data.forcast
                   fetch("https://api.weatherbit.io/v2.0/forecast/daily?&NC&key=4d09605840284ab4874d3f0bb45315a4&city="+city).then((response)=>{
                    response.json().then((a)=>{
                      const yo = a.data[0].weather.description
                      const forcast = a.data[0].temp     
                      const date =a.data[0].datetime
                      console.log(a.data[0].weather.description)
                      for(let i=0;i<7;i++)
                      {      
                      messagethree.textContent=a.data[i].datetime+" tempreture : "+a.data[i].temp+" "+a.data[i].weather.description
                      console.log(a.data[i].datetime)
                      }
                    })
                })    
                   
              }
    })
})
  
    e.preventDefault()
    
})