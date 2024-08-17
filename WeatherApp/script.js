const apiKey = "42c407e2d32bcb115267aa31ea26480e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const emoji = document.querySelector(".emoji");

async function checkWeather(city){
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
      var data = await response.json();
      console.log(data);
      
      document.querySelector(".city").innerHTML = data.name;

      document.querySelector(".temp").innerHTML = Math.round( data.main.temp) + "°C";

      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

      document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

      if(data.weather[0].main == "Clouds"){
        emoji.src = "img/clouds.png"
      }
      else if(data.weather[0].main == "clear"){
        emoji.src = "img/clear.png"
      }
      else if(data.weather[0].main == "drizzle"){
        emoji.src = "img/drizzle.png"
      }
      else if(data.weather[0].main == "humidity"){
        emoji.src = "img/humidity.png"
      }
      else if(data.weather[0].main == "mist"){
        emoji.src = "img/mist.png"
      }
      else if(data.weather[0].main == "snow"){
        emoji.src = "img/snow.png"
      }
      else if(data.weather[0].main == "rain"){
        emoji.src = "img/rain.png"
      }
      document.querySelector(".weather").style.display = "block";
}

 searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
 })
