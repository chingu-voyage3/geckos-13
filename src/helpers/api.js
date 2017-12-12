import { cocktailThumbnailFactory, queryFactory } from '../helpers/helpers';
import { data } from '../helpers/data';
import { api } from './apiConfig';

export const fetchCocktails = ingredients => {
  fetch('http://addb.absolutdrinks.com/drinks/with/apple/?appId=15937').then(
    res => {
      console.log(res);
      return res;
    }
  );
};
