import './css/styles.css';
import oneCountryMarkup from './templates/oneCountry.hbs';
import manyCountriesMarkup from './templates/listCountries.hbs';
import getCuntries from './js/fetchCountries';
import { refs } from './js/refs'
  
import { error, success } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

import debounce from 'lodash.debounce';

const { input, countriesContainer, clearBtn } = refs;


const searchCountrie = ({ target: { value } }) => {
  if (value.trim() !== '') {
    getCuntries(value.trim()).then(data => {
      if (data.length === 1) {
        success({
          text: "Found a country",
          delay: 2000,
        })
        countriesContainer.innerHTML = oneCountryMarkup(data[0]);
        return;
      }
      if (data.length > 1 && data.length < 11) {
        countriesContainer.innerHTML = manyCountriesMarkup(data);
        return;
      }
      if (data.length > 10) {
        error({
          text: "Too many matches found. Please enter a more specific query!",
          type: 'error',
          delay: 2000,
        });
      }
    });
  }
};

const eraseContainer = () => {
  countriesContainer.innerHTML = '';
  input.value = '';
};

input.addEventListener('input', debounce(searchCountrie, 500));
clearBtn.addEventListener('click', eraseContainer);