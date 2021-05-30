// import axios from 'axios';

const baseUrl = 'https://restcountries.eu/rest/v2/name/';
// axios.defaults.baseURL = `https://restcountries.eu/rest/v2/name/`;

export default function fetchCountries(searchQuery) {

//   return axios.get(searchQuery)
//     .then(response => {
//       console.log('than');
//       console.log(response.data);
//       return response.data;
//     })
//     .catch(error => {
//       console.log('error');
//       console.error(error);
// });      
  
  return fetch(baseUrl + searchQuery)
    .then(response => response.json());
  
    // .then(response => {
      // console.log('then1');
      // console.log(response);
    //   return response.json();
    // });
    // .then(data => {
    //   console.log('then2');
    //   console.log(data);
    //   return data;
    // });
};