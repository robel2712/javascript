async function weather(city) {
    const apiKey='648d111e1c873aae4e7b771f576015c7'
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    try{
    const data = await fetch(url,{mode:'cors'});
    const fetchData = await data.json()
     
    console.log(fetchData)

    
    
    weatherHtml= `<h2>City: ${city}</h2>
                        <p>Temprature:${fetchData.main.temp}</p>
                        <p>Description:${fetchData.weather[0].description}</p>
                        <p>Wind Speed:${fetchData.wind.speed}</p>
                             `
    
    
   if(photo(city)){
    display.innerHTML=weatherHtml
   }
                   
    }
    catch(err){
        console.log('fetch error'+ err.error);
        
    }
   
}

async function photo(city) {
    try{
    const response = await fetch((`https://api.giphy.com/v1/gifs/translate?api_key=9YCPp7iMylFAN1RW8uYnqyZXVxDuugCz&s=${encodeURIComponent(city)}`),{mode:'cors'})
    const photo = await response.json()
    const img = document.querySelector('img')
    const imgurl = photo.data.images.original_still.url
    img.src= imgurl
    display.style.background=`url(${imgurl})` 
    display.style.backgroundSize=`cover`
    display.style.backgroundPosition='center'
    
    }
    catch(error){
        console.log("failed:"+error.message)
    }
}
const display = document.getElementById('display')

document.querySelector('form').addEventListener("submit",function(e){
    e.preventDefault()
    const city = document.getElementById('city').value
    if(city){
        weather(city)
        
    }
    else{
        alert('please enter a city name');
    }

    
})


   
