import { cocktailThumbnailFactory } from '../helpers/helpers';
import { data, ingredients } from '../helpers/data';
import { api } from './apiConfig';

export const fetchCocktails = ingredients => cocktailThumbnailFactory(data);

export const fetchIngredients = () => ingredients;
