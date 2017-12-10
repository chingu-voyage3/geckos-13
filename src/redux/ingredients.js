export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';

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
};

const ingredients = (state = initialState, action) => {
  switch (action.type) {
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

export default ingredients;
