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
import IngredientHolder from './IngredientHolder';
import cocktails from '../../redux/cocktails';
import { Label, Icon } from 'semantic-ui-react';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { createMockStore } from 'redux-test-utils';
import configureStore from 'redux-mock-store';

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

  it('should dispatch ADD_INGREDIENT action', () => {
    expect(container).toBeDefined();
    expect(
      container
        .dive()
        .instance()
        .props.addIngredient('apple')
    ).toEqual({ type: 'ADD_INGREDIENT', ingredient: 'apple' });
  });

  it('should dispatch REMOVE_INGREDIENT action', () => {
    expect(
      container
        .dive()
        .instance()
        .props.removeIngredient('apple')
    ).toEqual({ type: 'REMOVE_INGREDIENT', id: 'apple' });
  });

  it('should have ingredient array as prop', () => {
    // It works to call the functions on the props, but the cocktails and ingredients arrays are always undefined.
    console.log(container.dive().instance().props);
    expect(container.dive().instance().props).toEqual(initialState.ingredients);
  });

  it('should have cocktails array as prop', () => {});
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

describe('------------ IngredientHolder.js ----------------', () => {
  const ingredients = ['apple', 'bananas'];
  let onRemoveIngredient = jest.fn();
  it('should match its empty snapshot', () => {
    const component = shallow(
      <IngredientHolder
        ingredients={ingredients}
        onRemoveIngredient={onRemoveIngredient}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render two labels', () => {
    const component = shallow(
      <IngredientHolder
        ingredients={ingredients}
        onRemoveIngredient={onRemoveIngredient}
      />
    );

    const labels = component.find(Label);
    expect(labels.length).toBe(2);
  });

  it('should have props ingredients and onRemoveIngredient"', () => {
    const component = mount(
      <IngredientHolder
        ingredients={ingredients}
        onRemoveIngredient={onRemoveIngredient}
      />
    );

    expect(component.prop('ingredients')).toEqual(ingredients);
    expect(component.prop('onRemoveIngredient')).toBeDefined();
  });

  it('it should have labels with texts "apple" and "bananas""', () => {
    const component = mount(
      <IngredientHolder
        ingredients={ingredients}
        onRemoveIngredient={onRemoveIngredient}
      />
    );

    expect(
      component
        .find(Label)
        .at(0)
        .text()
    ).toBe('apple');

    expect(
      component
        .find(Label)
        .at(1)
        .text()
    ).toBe('bananas');
  });

  it('it should have labels with one Icon"', () => {
    const component = mount(
      <IngredientHolder
        ingredients={ingredients}
        onRemoveIngredient={onRemoveIngredient}
      />
    );

    expect(
      component
        .find(Label)
        .at(0)
        .find(Icon).length
    ).toBe(1);
  });

  it('it should call onRemoveIngredient when icon is clicked"', () => {
    let onRemoveIngredient = jest.fn();
    const component = mount(
      <IngredientHolder
        ingredients={ingredients}
        onRemoveIngredient={onRemoveIngredient}
      />
    );

    component
      .find(Label)
      .at(0)
      .find(Icon)
      .simulate('click');

    expect(onRemoveIngredient).toHaveBeenCalled();
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
