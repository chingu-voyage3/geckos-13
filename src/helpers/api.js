import { cocktailThumbnailFactory } from '../helpers/helpers';
import { data } from '../helpers/data';
import { api } from './apiConfig';

export const fetchCocktails = ingredients => {
  return cocktailThumbnailFactory(data);
};
