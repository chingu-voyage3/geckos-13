import React from 'react';
import { Form, Button, Label, Icon } from 'semantic-ui-react';

// local imports
import SearchForm from './SearchForm';

// styles
import './Search.css';
import background from '../../helpers/img/cocktail-background.jpg';

const colors = ['red', 'orange', 'yellow', 'olive', 'green', 'pink'];

class Search extends React.Component {
  state = {
    ingredients: [],
  };

  addIngredient = val => {
    /* No dublicate ingredients */
    if (this.state.ingredients.includes(val)) {
      return;
    }

    // no empty strings
    if (val.trim(' ') === '') {
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
    const { value, ingredients } = this.state;
    return (
      <div
        className="search-container"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h3>Add your ingredients</h3>
        <SearchForm onAddIngredient={this.addIngredient} />
        <div className="ingredients-holder">
          {ingredients.map((ingredient, i) => (
            <Label
              color={colors[i % colors.length]}
              size="tiny"
              key={i}
              value={ingredient}
            >
              {ingredient}
              <Icon
                name="delete"
                onClick={e => this.removeIngredient(ingredient)}
              />
            </Label>
          ))}
        </div>
        <Button basic fluid circular>
          Search
        </Button>
      </div>
    );
  }
}
export default Search;
