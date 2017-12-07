import React from 'react';

// local imports
import SearchForm from './SearchForm';

// styles
import './Search.css';

class Search extends React.Component {
  state = {
    ingredients: [],
  };

  addIngredient = val => {
    /* No dublicate ingredients */
    if (this.state.ingredients.includes(val)) {
      return;
    }

    this.setState(prev => ({
      ingredients: [...prev.ingredients, val],
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
      <SearchForm
        ingredients={this.state.ingredients}
        onAddIngredient={this.addIngredient}
        onDeleteIngredient={this.removeIngredient}
      />
    );
  }
}
export default Search;
