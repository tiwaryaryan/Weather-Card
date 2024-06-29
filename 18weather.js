/*let rjson = JSON.parse(`{
    "location": {
        "name": "Jamshedpur",
        "region": "Jharkhand",
        "country": "India",
        "lat": 22.8,
        "lon": 86.18,
        "tz_id": "Asia/Kolkata",
        "localtime_epoch": 1717324448,
        "localtime": "2024-06-02 16:04"
    },
    "current": {
        "last_updated_epoch": 1717324200,
        "last_updated": "2024-06-02 16:00",
        "temp_c": 37.0,
        "temp_f": 98.6,
        "is_day": 1,
        "condition": {
            "text": "Patchy light rain with thunder",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/386.png",
            "code": 1273
        },
        "wind_mph": 3.8,
        "wind_kph": 6.1,
        "wind_degree": 140,
        "wind_dir": "SE",
        "pressure_mb": 1002.0,
        "pressure_in": 29.59,
        "precip_mm": 0.14,
        "precip_in": 0.01,
        "humidity": 57,
        "cloud": 75,
        "feelslike_c": 39.8,
        "feelslike_f": 103.7,
        "windchill_c": 37.8,
        "windchill_f": 100.0,
        "heatindex_c": 41.3,
        "heatindex_f": 106.3,
        "dewpoint_c": 19.3,
        "dewpoint_f": 66.7,
        "vis_km": 5.0,
        "vis_miles": 3.0,
        "uv": 8.0,
        "gust_mph": 8.3,
        "gust_kph": 13.3,
        "air_quality": {
            "co": 300.4,
            "no2": 2.3,
            "o3": 125.9,
            "so2": 4.8,
            "pm2_5": 41.0,
            "pm10": 68.1,
            "us-epa-index": 3,
            "gb-defra-index": 4
        }
    }
}`) */

// let t = rjson["location"]["name"];
// console.log(t);
// console.log(temp);
// console.log(rjson["location"]["country"]);
// console.log(rjson["current"]["wind_kph"])
// console.log(rjson["current"]["temp_c"]);


let icoon = document.querySelector(".weather-icon");
let temp = document.querySelector(".temp");
let city = document.querySelector(".city");
let comment = document.querySelector(".comment");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let inp =document.querySelector(".search input"); 
let srchbtn =document.querySelector(".search button"); 
let url= //your api 

async function checkweather(cityy){

    let response = await fetch(url + cityy + "&aqi=yes");
    let data = await response.json();
    console.log(data);

    wind.innerText = data.current.wind_kph + "km/h";
    humidity.innerText = data.current.humidity + "%";
    temp.innerText  = data.current.temp_c + "°c";
    city.innerText= data.location.name;
    icoon.src = data.current.condition.icon;
    comment.innerText = "("+ data.current.condition.text +")";

    document.querySelector(".weather").style.display = "block";

    if(data.current.temp_c > 40){
        document.querySelector(".t").innerText = "Tehelka omlette banega !"
    }
    else if(data.current.temp_c < 15 && data.current.temp_c >= 0 ){
        document.querySelector(".t").innerText = "ठंडा ठंडा रिम-झिम रिम-झिम"
    }
    else if(data.current.temp_c < 0){
        document.querySelector(".t").innerText = "बर्फ़ ही बर्फ़";
    }
    else{
        document.querySelector(".t").innerText ="";
    }

 
}

srchbtn.addEventListener("click" , ()=> {
    checkweather(inp.value);
});

inp.addEventListener("keyup" , (e) => {
    if(e.keyCode === 13){   //key code for enter key
        checkweather(inp.value);
    }
})








