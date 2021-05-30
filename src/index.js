import './css/styles.css';
import oneCountryMarkup from './templates/oneCountry.hbs';
import manyCountriesMarkup from './templates/listCountries.hbs';
import getCuntries from './js/fetchCountries';
import { refs } from './js/refs'

import debounce from 'lodash.debounce';

const { input, countriesContainer, clearBtn } = refs;

// console.log(debounce);
// console.log(input);
// console.log(countriesContainer);
// console.log(clearBtn);

// console.log(getCuuntries('usa'));

const eraseContainer = () => {
  countriesContainer.innerHTML = '';
  input.value = '';
}  

const searchCountrie = ({ target: { value } }) => {
  if (value.trim() !== '') {
    getCuntries(value.trim()).then(data => {
      if (data.length === 1) {
        countriesContainer.innerHTML = oneCountryMarkup(data[0]);
        return;
      }
      if (data.length > 1 && data.length < 11) {
        countriesContainer.innerHTML = manyCountriesMarkup(data);
        return;
      }
      if (data.length > 10) {
        
      }
    });
  }
};

input.addEventListener('input', debounce(searchCountrie, 500));
clearBtn.addEventListener('click', eraseContainer);