import axios from 'axios';
import { cocktailThumbnailFactory, queryFactory } from '../helpers/helpers';
import { data } from '../helpers/data';
import { api } from './apiConfig';

export const fetchCocktails = ingredients => {
  axios
    .get(
      'http://addb.absolutdrinks.com/drinks/with/apple?apiKey=cdcb71827e3940e19651adcf0426058a'
    )
    .then(res => {
      console.log(res);
      return res;
    });
};
