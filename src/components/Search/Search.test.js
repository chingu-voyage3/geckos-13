/*
Search.js
-addIngredient
  -dublicate
  -valid
-removeIngredient
-render

SearchForm.js
-getSuggerstions,
-getSuggestionValue,
-renderSuggestion
-handleAddIngredient,
-onSuggestionsFetchRequested,
-onSuggestionsClearRequested
-render
*/

import React from 'react';
import ConnectedSearch, { Search } from './Search';
import SearchForm from './SearchForm';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { createMockStore } from 'redux-test-utils';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const shallowWithStore = (component, store) => {
  const context = {
    store,
  };
  return shallow(component, { context });
};

describe('---------- Search.js, dumb component ----------', () => {
  it('should match its empty snapshot', () => {
    const component = shallow(<Search />);

    expect(component).toMatchSnapshot();
  });

  it('should render an h3 with correct text', () => {
    const component = shallow(<Search />);
    expect(component.find('h3').text()).toBe('Add your ingredients');
  });
});

describe('---------- Search.js connected component --------', () => {
  const initialState = {
    cocktails: [],
    ingredients: [],
  };
  const mockStore = configureStore();
  let store;
  let container;

  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<ConnectedSearch store={store} />);
  });

  it('should create connected testable component', () => {
    expect(container).toBeDefined();
  });
});

describe('--------- Search.js connected component with provider', () => {
  const initialState = {
    cocktails: [],
    ingredients: [],
  };
  const mockStore = configureStore();
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <ConnectedSearch />
      </Provider>
    );
  });

  it('should create connected testable component', () => {
    expect(wrapper).toBeDefined();
  });
});

/*

it('Should add ingredient to state', () => {
  console.log(container.instance());

  //expect(component.instance().props.ingredients).toEqual(['apples']);
  //expect(component.instance().props.ingredients.length).toBe(1);
});


    it('Should not add dublicate ingredients to state', () => {
      const testState = {
        cocktails: [],
        ingredients: [],
      };
      const store = createMockStore(testState);
      const component = shallowWithStore(<Search />, store);
      component.instance().addIngredient('apples');

      expect(component.instance().props.ingredients).toEqual(['apples']);
      expect(component.instance().props.ingredients.length).toBe(1);
    });

    it('Should not add empty string', () => {
      const component = mount(<Search />);
      component.instance().addIngredient('');

      expect(component.instance().props.ingredients).toEqual([]);
      expect(component.instance().props.ingredients.length).toBe(0);
    });

  describe('removeIngredient', () => {
    it('Should remove ingredient from state', () => {
      const component = mount(<Search />);
      component.instance().setState({ ingredients: ['apples'] });
      component.instance().removeIngredient('apples');

      expect(component.instance().props.ingredients).toEqual([]);
      expect(component.instance().props.ingredients.length).toBe(0);
    });

    it('Should only remove ingredient matching the given value', () => {
      const component = mount(<Search />);
      component.instance().setState({ ingredients: ['apples'] });
      component.instance().removeIngredient('bananas');

      expect(component.instance().props.ingredients).toEqual(['apples']);
      expect(component.instance().props.ingredients.length).toBe(1);
    });
  });

  describe('render', () => {
    it('should render a SearchForm component', () => {
      const component = shallow(<Search />);
      expect(component.find(SearchForm).length).toBe(1);
    });
  });
});
*/
