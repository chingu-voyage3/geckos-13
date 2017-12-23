import { fetchCocktails } from '../helpers/api';

// Constants
export const FETCHING_COCKTAILS = 'FETCHING_COCKTAILS';
export const FETCHING_COCKTAILS_SUCCESS = 'FETCHING_COCKTAILS_SUCCESS';
export const FETCHING_COCKTAILS_FAILURE = 'FETCHING_COCKTAILS_FAILURE';
export const SELECT_COCKTAIL = 'SELECT_COCKTAIL';

export const fetchingCocktails = () => ({
  type: FETCHING_COCKTAILS,
});

export const fetchCocktailsSuccess = cocktails => ({
  type: FETCHING_COCKTAILS_SUCCESS,
  cocktails,
});

export const fetchCocktailsFailure = error => ({
  type: FETCHING_COCKTAILS_FAILURE,
  error,
});

export const selectCocktail = id => ({
  type: SELECT_COCKTAIL,
  id,
});

export const fetchAndHandleCocktails = () => dispatch => {
  dispatch(fetchingCocktails());
  const c = fetchCocktails();
  console.log(c);
  dispatch(fetchCocktailsSuccess(c));
};

const initialState = {
  cocktails: [],
  selectedCocktail: undefined,
  fetching: false,
  error: '',
};

const cocktails = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_COCKTAILS:
      return {
        ...state,
        fetching: true,
      };
    case FETCHING_COCKTAILS_SUCCESS:
      return {
        ...state,
        fetching: false,
        cocktails: action.cocktails,
      };
    case FETCHING_COCKTAILS_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    case SELECT_COCKTAIL:
      return {
        ...state,
        selectedCocktail: state.cocktails.find(x => x.id === action.id),
      };
    default:
      return state;
  }
};

export default cocktails;
