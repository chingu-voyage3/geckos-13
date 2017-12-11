import React from 'react';
import { Label, Icon, Form } from 'semantic-ui-react';

// For testing Search.js
import ConnectedSearch, { SearchContainer } from './SearchContainer';

// For testing SearchForm.js
import SearchForm from './SearchForm';
import {
  getSuggestions,
  ingredientsSuggestions,
  getSuggestionValue,
  renderSuggestion,
} from './SearchForm';
import Autosuggest from 'react-autosuggest';

// For testing IngredientsHolder.js
import IngredientHolder from './IngredientHolder';

// For testing redux
import cocktails from '../../redux/cocktails';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const shallowWithStore = (component, store) => {
  const context = {
    store,
  };
  return shallow(component, { context });
};

describe('---------- Search.js, dumb component ----------', () => {
  it('should match its empty snapshot', () => {
    const component = shallow(<SearchContainer />);

    expect(component).toMatchSnapshot();
  });

  it('should render an h3 with correct text', () => {
    const component = shallow(<SearchContainer />);
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

  //it('should have ingredient array as prop', () => {
  // It works to call the functions on the props, but the cocktails and ingredients arrays are always undefined.
  //console.log(container.dive().instance().props);
  //expect(container.dive().instance().props).toEqual(initialState.ingredients);
  //});

  //it('should have cocktails array as prop', () => {});
});

/*describe('--------- Search.js connected component with provider', () => {
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
});*/

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
    const component = shallow(
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
    const component = shallow(
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

describe('----------- SearchForm.js --------------', () => {
  const onAddIngredient = jest.fn();
  let component;

  beforeEach(() => {
    component = shallow(<SearchForm onAddIngredient={onAddIngredient} />);
  });

  it('should match its empty snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should return suggestion matching the input', () => {
    expect(getSuggestions('gi')).toEqual([
      { id: 'gin', name: 'Gin' },
      { id: 'ginseng', name: 'Ginseng' },
    ]);
    expect(getSuggestions('v')).toEqual([{ id: 'vodka', name: 'Vodka' }]);
    expect(getSuggestions(' ')).toEqual([]);
  });

  it('should only return the suggestion name', () => {
    expect(getSuggestionValue({ id: 'ginseng', name: 'Ginseng' })).toBe(
      'Ginseng'
    );
  });

  it('should return a div with the suggestion name', () => {
    expect(renderSuggestion({ id: 'ginseng', name: 'Ginseng' })).toEqual(
      <div>Ginseng</div>
    );
  });

  it('should start with the value state as an empty string', () => {
    expect(component.state().value).toBe('');
  });

  it('should render a Form', () => {
    expect(component.find(Form).length).toBe(1);
  });

  it('should render a Autosuggest', () => {
    expect(component.find(Autosuggest).length).toBe(1);
  });
});
