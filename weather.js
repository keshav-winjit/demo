var object
fetch('weather.json')
  .then(response =>response.json())
  .then(function(data){
    
   object=data;
   let DD,MM,YYYY,HRS,MTS,SEC
    let date=new Date(data.list[0].dt)
    DD=date.getDate()
    
     YYYY=date.getFullYear()
    let monthsList = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
    
     MM=monthsList[date.getMonth()]
     HRS=date.getHours()
     MTS=date.getMinutes()
     SEC=date.getSeconds()
    document.getElementById("today").innerHTML=DD+"-"+MM+"-"+YYYY+" "+HRS+":"+MTS+":"+SEC
    document.getElementById("temperature_today").innerHTML=data.list[0].main.temp-273+"°";
    let icony=data.list[0].weather[0].icon
    document.getElementById("image1").src="https://openweathermap.org/img/wn/"+icony+"@2x.png"
    document.getElementById("humidity_value").innerHTML=data.list[0].main.humidity+"%"
    document.getElementById("wind_speed").innerHTML=data.list[0].wind.speed
    let j=1
    for(let i=2;i<=7;i++)
    {
      let date=new Date(data.list[j].dt)
      console.log(date)
      console.log(j)
      DD=date.getDate()
      YYYY=date.getFullYear()
      HRS=date.getHours()
     MTS=date.getMinutes()
     SEC=date.getSeconds()
      MM=monthsList[date.getMonth()]
      document.getElementById("date"+i).innerHTML=DD+"-"+MM+"-"+YYYY+" "+HRS+":"+MTS+":"+SEC
      document.getElementById("temp"+i).innerHTML=data.list[j].main.temp-273+"°";
      let icony=data.list[j].weather[0].icon
    document.getElementById("image"+i).src="https://openweathermap.org/img/wn/"+icony+"@2x.png"
    document.getElementById("humidity"+i).innerHTML=data.list[j].main.humidity+"%"
    document.getElementById("wind_speed"+i).innerHTML=data.list[j].wind.speed
      





     j++



    }


  })
  .catch(error => console.log(error));
  

  setTimeout(console.log(object), 5000);