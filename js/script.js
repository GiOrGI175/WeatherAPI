const url =
  ' https://api.open-meteo.com/v1/forecast?latitude=41.716667&longitude=44.783333&current=temperature_2m,wind_speed_10m,is_day,wind_speed_10m';

fetch(url, { method: 'GET' })
  .then((data) => {
    console.log(data);
    if (data.status === 200) {
      return data.json();
    } else {
      console.error('verwamogo');
    }
  })
  .then((info) => {
    console.log(info);

    //! latitude & longitude info [<

    let latitude = document.querySelector('.Latitude');
    latitude.textContent = info.latitude;

    let longitude = document.querySelector('.Longitude');
    longitude.textContent = info.longitude;

    //! latitude & longitude info >]

    //! day or night [<

    if (info.current.is_day === 0) {
      let nightimgBox = document.querySelector('.dayOrNight');

      let img = document.createElement('img');
      img.src = './img/night.svg';

      nightimgBox.appendChild(img);
    } else {
      let nightimgBox = document.querySelector('.dayOrNight');

      let img = document.createElement('img');
      img.src = './img/day.svg';

      nightimgBox.appendChild(img);
    }

    //! day or night >]

    //! weather Celsius [<

    let Celsius = document.querySelector('.WeatherC');
    Celsius.textContent = `${info.current.temperature_2m}º`;

    //! weather Celsius >]

    //! weather Celsius img[<

    if (info.current.temperature_2m < 0) {
      //! add img [<

      let weatherImg = document.querySelector('.Weatherimg');

      let img = document.createElement('img');
      img.src = './img/snow.svg';

      weatherImg.appendChild(img);
      //! add img >]
    } else if (
      info.current.temperature_2m >= 0 &&
      info.current.temperature_2m <= 10
    ) {
      let weatherImg = document.querySelector('.Weatherimg');

      let img = document.createElement('img');
      img.src = './img/rain.svg';

      weatherImg.appendChild(img);
    } else if (
      info.current.temperature_2m > 10 &&
      info.current.temperature_2m <= 30
    ) {
      let weatherImg = document.querySelector('.Weatherimg');

      let img = document.createElement('img');
      img.src = './img/cloudy.svg';

      weatherImg.appendChild(img);
    } else if (info.current.temperature_2m > 30) {
      let weatherImg = document.querySelector('.Weatherimg');

      let img = document.createElement('img');
      img.src = './img/sunny.png';

      weatherImg.appendChild(img);
    }

    //! weather Celsius img >]

    //! weather Fahrenheit [<

    let Fahrenheitspan = document.querySelector('.Fahrenheit');

    let Fahrenheit = info.current.temperature_2m * 1.8 + 32;

    Fahrenheitspan.textContent = `ºF ${Fahrenheit}`;

    console.log(Fahrenheit);

    //! weather Fahrenheit >]

    //! weather wind [<

    let wind = document.querySelector('.speed');

    wind.textContent = `${info.current.wind_speed_10m} km/h`;

    //! weather wind >]
  });
