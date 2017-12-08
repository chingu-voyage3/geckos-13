const FETCHING_COCKTAILS = 'FETCHING_COCKTAILS';
const FETCHING_COCKTAILS_SUCCESS = 'FETCHING_COCKTAILS_SUCCESS';
const FETCHING_COCKTAILS_FAILURE = 'FETCHING_COCKTAILS_FAILURE';
const ADD_INGREDIENT = 'ADD_INGREDIENT';
const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';

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

export const addIngredient = ingredient => ({
  type: ADD_INGREDIENT,
  ingredient,
});

export const removeIngredient = id => ({
  type: REMOVE_INGREDIENT,
  id,
});

const initialState = {
  ingredients: [],
  cocktails: [],
};

const cocktails = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_COCKTAILS:
    case FETCHING_COCKTAILS_SUCCESS:
    case FETCHING_COCKTAILS_FAILURE:
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.ingredient],
      };
    case REMOVE_INGREDIENT:
      const ingredients = state.ingredients.filter(id => id !== action.id);
      return {
        ...state,
        ingredients,
      };
    default:
      return state;
  }
};

export default cocktails;
