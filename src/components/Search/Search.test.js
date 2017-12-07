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
import Search from './Search';
import SearchForm from './SearchForm';

describe('Search.js', () => {
  it('should match its empty snapshot', () => {
    const tree = shallow(<Search />);

    expect(tree).toMatchSnapshot();
  });

  describe('addIngredient', () => {
    it('Should add ingredient to state', () => {
      const component = mount(<Search />);
      component.instance().addIngredient('apples');

      expect(component.instance().state.ingredients).toEqual(['apples']);
    });

    it('Should not add dublicate ingredients to state', () => {
      const component = mount(<Search />);
      component.instance().setState({ ingredients: ['apples'] });
      component.instance().addIngredient('apples');

      expect(component.instance().state.ingredients).toEqual(['apples']);
      expect(component.instance().state.ingredients.length).toBe(1);
    });

    it('Should not add empty string', () => {
      const component = mount(<Search />);
      component.instance().addIngredient('');

      expect(component.instance().state.ingredients).toEqual([]);
      expect(component.instance().state.ingredients.length).toBe(0);
    });
  });

  describe('removeIngredient', () => {
    it('Should remove ingredient from state', () => {
      const component = mount(<Search />);
      component.instance().setState({ ingredients: ['apples'] });
      component.instance().removeIngredient('apples');

      expect(component.instance().state.ingredients).toEqual([]);
      expect(component.instance().state.ingredients.length).toBe(0);
    });

    it('Should only remove ingredient matching the given value', () => {
      const component = mount(<Search />);
      component.instance().setState({ ingredients: ['apples'] });
      component.instance().removeIngredient('bananas');

      expect(component.instance().state.ingredients).toEqual(['apples']);
      expect(component.instance().state.ingredients.length).toBe(1);
    });
  });

  describe('render', () => {
    it('should render a SearchForm component', () => {
      const component = shallow(<Search />);
      expect(component.find(SearchForm).length).toBe(1);
    });
  });
});
