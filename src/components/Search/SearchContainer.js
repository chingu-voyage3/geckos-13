'use strict';

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import * as cocktailActionCreators from '../../redux/cocktails';
import * as ingredientsActionCreators from '../../redux/ingredients';

// local imports
import SearchForm from './SearchForm';
import IngredientHolder from './IngredientHolder';

// styles
import './Search.css';
import background from '../../helpers/img/cocktail-background.jpg';

export class SearchContainer extends React.Component {
  addIngredient = val => {
    /* No dublicate ingredients */
    if (this.props.ingredients.includes(val)) {
      return;
    }

    // no empty strings
    if (val.trim(' ') === '' || val === '') {
      return;
    }

    this.props.addIngredient(val);
  };

  removeIngredient = val => {
    this.props.removeIngredient(val);
  };

  render() {
    const { ingredients } = this.props;
    return (
      <div
        className="search-container"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h3>Add your ingredients</h3>
        <SearchForm onAddIngredient={this.addIngredient} />
        <IngredientHolder
          ingredients={ingredients}
          onRemoveIngredient={this.removeIngredient}
        />
        <Button
          basic
          fluid
          circular
          onClick={this.props.fetchAndHandleCocktails}
        >
          Search
        </Button>
      </div>
    );
  }
}

const mapStateToProps = ({ cocktails, ingredients }, props) => ({
  cocktails: cocktails.cocktails,
  ingredients: ingredients.ingredients,
});

const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators(
    { ...cocktailActionCreators, ...ingredientsActionCreators },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
