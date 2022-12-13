function getWeather(){
    fetch("https://api.open-meteo.com/v1/forecast?latitude=-10.143070&longitude=-76.625191&hourly=temperature_2m,relativehumidity_2m,windspeed_10m", {
      "method": "GET",
      "headers": {        
      }
      })
      .then(response => response.json())
      .then(response => console.log(JSON.stringify(response)))
    .catch(err => {
      console.error(err);
    });
    };
    
    async function getWeather2(cityName){
        console.log("test" + cityName);
    let response = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=metric&apikey=3d7beccda66c98a4ee151b9fbb5c6c8b");
    Status = response.status;
    if (Status ===200){
    let data = await response.text();
    var obj = JSON.parse(data);
    //let temperature = data.main.temp;
    var temp = obj.main.temp;
    var minTemp = obj.main.temp_min;
    var maxTemp = obj.main.temp_max;
    var wDescription = obj.weather[0].description;
    var wMain = obj.weather[0].main;
    console.log(data);
    console.log(obj);
    console.log(minTemp, maxTemp, temp, wDescription, wMain);
    if(minTemp < 3){
    document.getElementById("morning").innerHTML = (minTemp + " C" + '&#10052;');
    }else{
        document.getElementById("morning").innerHTML = (minTemp + " C");
    }
    document.getElementById("afternoon").innerHTML = (temp + " C");
    document.getElementById("evening").innerHTML = (maxTemp + " C");
    document.getElementById("currentCondition1").innerHTML = (wDescription);
   // document.getElementById("currentCondition2").innerHTML = (wMain);
    
    if(wDescription.includes("rain")){
        document.getElementById("funIcon").innerHTML = ("&#9748");
    }else if (wDescription.includes("cloud")){
        document.getElementById("funIcon").innerHTML = ("&#9925;")
    }else{ 
        document.getElementById("funIcon").innerHTML = ("&#127774;")
    }
}else{
    alert("Invalid city name: " + cityName)
}
};


