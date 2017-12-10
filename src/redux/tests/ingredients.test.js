import ingredients, {
  addIngredient,
  removeIngredient,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
} from '../ingredients';

describe('IngredientsActionCreators', () => {
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
      ingredients: [],
    };
    const action = {
      type: ADD_INGREDIENT,
      ingredient: 'apple',
    };

    const newState = ingredients(state, action);
    expect(newState).toEqual({
      ingredients: ['apple'],
    });
  });

  it('should remove ingredient when REMOVE_INGREDIENT action is dispatched', () => {
    const state = {
      ingredients: ['apple'],
    };
    const action = {
      type: REMOVE_INGREDIENT,
      id: 'apple',
    };

    const newState = ingredients(state, action);
    expect(newState).toEqual({
      ingredients: [],
    });
  });

  it('should return the state unchanged if no action type matches', () => {
    const state = {
      ingredients: ['apple'],
    };
    const action = {
      type: '',
    };

    const newState = ingredients(state, action);
    expect(newState).toEqual(state);
  });
});
