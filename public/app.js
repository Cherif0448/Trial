

weather=document.querySelector('#City')
input=document.querySelector('input')
output=document.querySelector('#output')

weather.addEventListener('submit',function(e)
{
    e.preventDefault()
    

    fetch('https://api.opencagedata.com/geocode/v1/json?q='+input.value+'&key=9e7bd5138379478cacf19c079fcabd2b').then(function(response)
{
    console.log(input.value)
    response.json().then(function(data)
{
    console.log(data)
    if (data.results.length===0)
    {
        output.textContent='Cannot find location. Please enter another Valid address'
    }
    else{
        lat=data.results[0].geometry.lat
        lon=data.results[0].geometry.lng
        console.log(lat)
        fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=81e2e668520e8c371caacc9be6c0bbac&units=metric').then(function(response)
    {
        console.log('temperature')
        response.json().then(function(data)
    {
        temperature=data.main.temp
        console.log('temperature')
        minimum=data.main.temp_min
        maximum=data.main.temp_max
        pressure=data.main.pressure
        humidity=data.main.humidity
        output.textContent='Temperature: '+temperature+'\n'+' minimum temperature: '+minimum+'\n'+" maximum temperature: "+maximum+'\n'+" pressure: "+pressure+'\n'+" humidity: "+humidity
        
    })
    })

    }
})
})
})