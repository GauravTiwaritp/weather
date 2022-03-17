let weather={
    "apiKey":"995e9319f67a221c59560af4e2a6f446",
    fetchweather:function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+(weather.apiKey))
        .then((response)=>response.json())
        .then((data) =>this.displayWeather(data));
    },
    displayWeather: function(datas) {
        const{name}=datas;
        const{icon,description}=datas.weather[0];
        const{humidity}=datas.main;
        const{temp}=datas.main;
       // console.log(name,icon,description,temp);
        document.querySelector(".city").innerHTML="Weather in" +" "+ name;
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".description").innerHTML= description;
        document.querySelector(".temp").innerHTML=temp +"°C";
        document.querySelector(".weather").classList.remove("loading");
        document.querySelector(".humidity").innerHTML=humidity+"%humidity";
        
    },
    search:function(){
        this.fetchweather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search-button").addEventListener("click",function(){
    weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup",function(events){
    if(events.key=="Enter"){
        weather.search();
    }
});
window.onload = function() {
    display_c();
    weather.fetchweather("delhi");
    
  };

  function display_c(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()',refresh)
    }
    
    function display_ct() {
        var x = new Date()
        var x1=x.getMonth() + 1+ "/" + x.getDate() + "/" + x.getFullYear(); 
        x1 = x1 + " - " +  x.getHours( )+ ":" +  x.getMinutes() + ":" +  x.getSeconds();
        document.getElementById('ct').innerHTML = x1;
        display_c();
     }