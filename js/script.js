const url =
  ' https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=43.3569&current=temperature_2m,wind_speed_10m,is_day,wind_speed_10m';

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
  });
