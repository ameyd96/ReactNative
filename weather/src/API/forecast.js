// import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
//   params: {q: 'san francisco,us'},
//   headers: {
//     'x-rapidapi-key': '57e1b1a78amshde310490671b408p1ca936jsn41d09a36b0fd',
//     'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
//     "useQueryString" : true
//   }
// };

// const forecast = options;

// export default forecast;

import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
  params: {q: 'mumbai'},
  headers: {
  'x-rapidapi-key': '57e1b1a78amshde310490671b408p1ca936jsn41d09a36b0fd',
  'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
  }
};

const forecast = options;

export default forecast;
