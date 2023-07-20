fetch('http://demo1583224.mockable.io/getWeather')
.then(response =>response.json())
.then(function(data){
    console.log(data)
  })