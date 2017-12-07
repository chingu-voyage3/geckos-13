import React from 'react';
import './Search.css';
import SearchForm from './SearchForm';
import SearchInput from './SearchInput';

class Search extends React.Component {
  state = {
    ingredients: [
      'one',
      'two',
      'red',
      'orange',
      'yellow',
      'olive',
      'green',
      'teal',
      'blue',
      'violet',
      'purple',
      'pink',
      'brown',
      'grey',
      'black',
    ],
  };

  addIngredient = (e, val) => {
    // Only add ingredient if enterkey is pushed
    if (e.charCode !== 13) {
      return;
    }

    // no empty strings
    if (this.state.value.trim(' ') === '') {
      return;
    }

    this.setState(prev => ({
      ingredients: [...prev.ingredients, this.state.value],
      value: '',
    }));
  };

  removeIngredient = val => {
    const ingredients = this.state.ingredients.filter(
      ingredient => ingredient !== val
    );
    this.setState({ ingredients });
  };

  render() {
    const { value } = this.state;
    return (
      <SearchInput
        ingredients={this.state.ingredients}
        onAddIngredient={this.addIngredient}
        onDeleteIngredient={this.removeIngredient}
      />
    );
  }
}
export default Search;
