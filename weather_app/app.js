const btn = document.querySelector(".search-btn");
console.log(btn);
const api_key = "ccb135d43944412e85fbe50051127be3";
let tempdata = ""
let tempdata1 = ""
const errmsg = document.querySelector(".error-msg");
const input1 = document.querySelector(".search-input")

const fetch_data = () => {
    console.log("clicked")
    const city = document.querySelector(".search-input").value;
    console.log(city);
    if (!city) {
        errmsg.innerText = "please enter a valid city";
        return;
    }
    const wapi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const fapi = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}`;
    fetch(wapi)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayData(data);
        })
        .catch(err => {
            errmsg.innerText = "please enter a valid city";
            document.querySelector(".search-input").value = '';
        })
    fetch(fapi)
        .then(res => res.json())
        .then(data => {
            tempdata1 = data;
            displayForecast(data.list);
        })
        .catch(err => {
            console.log("error");
        })
}


btn.addEventListener("click", (e) => {
    fetch_data();
})

input1.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        fetch_data();
    }
})

const displayData = (data) => {
    errmsg.innerText = "";
    console.log(data);
    const tempdiv = document.querySelector("#temp-div");
    const weatherinfo = document.querySelector("#weather-info");
    const weathericon = document.querySelector("#weather-icon");
    tempdiv.innerHTML = ''
    weatherinfo.innerHTML = ''
    if (data.cod === 404) {
        weatherinfo.innerHTML = `<p>${data.message}</p>`
    }
    else {
        const cityName = data.name;
        const temprature = Math.round(data.main.temp - 273.15);
        const des = data.weather[0].description;
        const iconcode = data.weather[0].icon;
        const iconurl = `https://openweathermap.org/img/wn/${iconcode}@4x.png`;
        const tempraturehtml = `<p>${temprature}°C</p>`
        const weatherhtml = `
        <p>${cityName}</p>
        <p>${des}</p>`
        tempdiv.innerHTML = tempraturehtml;
        weatherinfo.innerHTML = weatherhtml;
        weathericon.src = iconurl;
        weathericon.alt = des
        console.log(cityName, temprature, des);
        showImage();

    }
}

const displayForecast = (data) => {
    const hfo = document.querySelector("#hourly-forecast");
    hfo.innerHTML = '';
    const next24 = data.slice(0, 8);
    console.log(next24);
    next24.forEach(item => {
        const dateTime = new Date(item.dt * 1000);
        const hour = dateTime.getHours();
        const temperature = Math.round(item.main.temp - 273.15);
        const iconcode = item.weather[0].icon;
        const iconurl = `https://openweathermap.org/img/wn/${iconcode}.png`;
        const hourlyhtml = `
        <div class="hourly-item">
            <span>${hour}:00</span>
            <img src="${iconurl}" alt="hourly weather icon">
            <span>${temperature}°C</span>
        </div>
        `;
        hfo.innerHTML += hourlyhtml;
    })
    console.log(next24);
}

const showImage = () => {
    const weathericon = document.querySelector("#weather-icon");
    weathericon.style.display = 'block';
}