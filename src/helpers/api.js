import { cocktailThumbnailFactory, queryFactory } from '../helpers/helpers';
import { data } from '../helpers/data';
import { api } from './apiConfig';
import axios from 'axios-jsonp-pro';

var config = {
  headers: {
    'Access-Control-Request-Method': 'GET',
    'Content-Type': 'application/json',
  },
  mode: 'no-cors',
};

export const fetchCocktails = ingredients => {
  return axios.jsonp(
    'https://assets.absolutdrinks.com/drinks/300x400/peru-libre.png'
  );
};
