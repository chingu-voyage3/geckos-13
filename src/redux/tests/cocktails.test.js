import cocktails, {
  fetchCocktails,
  fetchCocktailsSuccess,
  fetchCocktailsFailure,
  FETCHING_COCKTAILS,
  FETCHING_COCKTAILS_SUCCESS,
  FETCHING_COCKTAILS_FAILURE,
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
});

describe('Cocktails reducer', () => {
  it('should return the state unchanged if no action type matches', () => {
    const state = {
      cocktails: [],
    };
    const action = {
      type: '',
    };

    const newState = cocktails(state, action);
    expect(newState).toEqual(state);
  });
});
