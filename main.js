let weather = {
    'apiKey': 'c5481827797b8c5f8dec85720877f5a6',
    fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
      .then((response) => response.json())
    .then((data) => this.displayWeather(data));
    },
    displayWeather : function (data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        const {country} = data.sys;
        // console.log(name, icon, description, temp, humidity, speed, country);
        document.querySelector('.city').innerText = 'Weather in ' + name;
        document.querySelector('.country').innerText = country;
        document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector('.temp').innerText = temp +' °C';
        document.querySelector('.description').innerText = description;
        document.querySelector('.humidity').innerText = 'Humidity: ' +humidity+'%';
        document.querySelector('.wind').innerText = 'Wind Speed: ' + speed +' km/h';

    },
    search: function (){
        this.fetchWeather(document.querySelector('.search-bar').value);
    }
}

document.querySelector('.search button').addEventListener('click', function(){
    weather.search();
    document.querySelector('.search-bar').value = '';
})

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        weather.search();
        document.querySelector('.search-bar').value = '';
    }
});