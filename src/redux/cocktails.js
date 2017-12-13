import { fetchCocktails } from '../helpers/api';

// Constants
export const FETCHING_COCKTAILS = 'FETCHING_COCKTAILS';
export const FETCHING_COCKTAILS_SUCCESS = 'FETCHING_COCKTAILS_SUCCESS';
export const FETCHING_COCKTAILS_FAILURE = 'FETCHING_COCKTAILS_FAILURE';

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

export const fetchAndHandleCocktails = () => dispatch => {
  dispatch(fetchingCocktails());
  const c = fetchCocktails().then(data =>
    dispatch(fetchCocktailsSuccess(data.result))
  );
};

const initialState = {
  cocktails: [],
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
        fetching: false,
        cocktails: action.cocktails,
      };
    case FETCHING_COCKTAILS_FAILURE:
      return {
        fetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default cocktails;
