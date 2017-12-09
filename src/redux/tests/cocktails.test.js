import cocktails, {
  addIngredient,
  removeIngredient,
  fetchCocktails,
  fetchCocktailsSuccess,
  fetchCocktailsFailure,
  FETCHING_COCKTAILS,
  FETCHING_COCKTAILS_SUCCESS,
  FETCHING_COCKTAILS_FAILURE,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
} from '../cocktails';

describe('CocktailActionCreators', () => {
  it('should return an action of type FETCHING_COCKTAILS', () => {
    const ret = fetchCocktails();
    expect(ret).toEqual({ type: 'FETCHING_COCKTAILS' });
  });
  it('should return an action of type FETCHING_COCKTAILS_SUCCESS', () => {
    const cocktails = [];
    const ret = fetchCocktailsSuccess(cocktails);
    expect(ret).toEqual({ type: 'FETCHING_COCKTAILS_SUCCESS', cocktails });
  });
  it('should return an action of type FETCHING_COCKTAILS_FAILURE', () => {
    const err = '';
    const ret = fetchCocktailsFailure(err);
    expect(ret).toEqual({ type: 'FETCHING_COCKTAILS_FAILURE', err });
  });
  it('should return an action of type ADD_INGREDIENT', () => {
    const ingredient = 'apple';
    const ret = addIngredient(ingredient);
    expect(ret).toEqual({ type: 'ADD_INGREDIENT', ingredient });
  });
  it('should return an action of type REMOVE_INGREDIENT', () => {
    const id = 'apple';
    const ret = removeIngredient(id);
    expect(ret).toEqual({ type: 'REMOVE_INGREDIENT', id });
  });
});

describe('Cocktails reducer', () => {
  it('should add ingredient when ADD_INGREDIENT action is dispatched', () => {
    const state = {
      cocktails: [],
      ingredients: [],
    };
    const action = {
      type: ADD_INGREDIENT,
      ingredient: 'apple',
    };

    const newState = cocktails(state, action);
    expect(newState).toEqual({
      cocktails: [],
      ingredients: ['apple'],
    });
  });

  it('should remove ingredient when REMOVE_INGREDIENT action is dispatched', () => {
    const state = {
      cocktails: [],
      ingredients: ['apple'],
    };
    const action = {
      type: REMOVE_INGREDIENT,
      id: 'apple',
    };

    const newState = cocktails(state, action);
    expect(newState).toEqual({
      cocktails: [],
      ingredients: [],
    });
  });
});
