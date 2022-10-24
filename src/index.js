let currentTime = new Date();

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
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
    "December",
  ];

  let currentYear = date.getFullYear();
  let currentDay = days[date.getDay()];
  let currentMonth = months[date.getMonth()];
  let currentDate = date.getDate();

  let Date = `Today is ${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}`;
  console.log(Date);

  return Date;
}

console.log(formatDate(currentTime));
let h12 = document.querySelector("h12");
h12.innerHTML = formatDate(currentTime);

function updatecity(event) {
  event.preventDefault();
  let cityname = document.querySelector("#Citytext");
  console.log(cityname.value);
  let city3 = document.querySelector("#city");
  city3.innerHTML = cityname.value;

  let city = cityname.value;

  let apiKey = "3ea863f1a0da2cf9365b79cccd1fe510";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  let temperature = response.data.main.temp;
  console.log(temperature);
  console.log(response);
  let city3 = document.querySelector("#city");
  city3.innerHTML = response.data.name;

  let temphtml = document.querySelector("#temperature");
  temphtml.innerHTML = `${temperature}°`;
}

let city1 = document.querySelector("#Citysubmit");
city1.addEventListener("click", updatecity);
