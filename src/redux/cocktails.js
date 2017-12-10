export const FETCHING_COCKTAILS = 'FETCHING_COCKTAILS';
export const FETCHING_COCKTAILS_SUCCESS = 'FETCHING_COCKTAILS_SUCCESS';
export const FETCHING_COCKTAILS_FAILURE = 'FETCHING_COCKTAILS_FAILURE';

export const fetchCocktails = () => ({
  type: FETCHING_COCKTAILS,
});

export const fetchCocktailsSuccess = cocktails => ({
  type: FETCHING_COCKTAILS_SUCCESS,
  cocktails,
});

export const fetchCocktailsFailure = err => ({
  type: FETCHING_COCKTAILS_FAILURE,
  err,
});

const initialState = {
  cocktails: [],
};

const cocktails = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_COCKTAILS:
    case FETCHING_COCKTAILS_SUCCESS:
    case FETCHING_COCKTAILS_FAILURE:
    default:
      return state;
  }
};

export default cocktails;
