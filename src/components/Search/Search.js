import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import * as cocktailActionCreators from '../../redux/cocktails';

// local imports
import SearchForm from './SearchForm';
import IngredientHolder from './IngredientHolder';

// styles
import './Search.css';
import background from '../../helpers/img/cocktail-background.jpg';

export class Search extends React.Component {
  'use strict';
  addIngredient = val => {
    /* No dublicate ingredients */
    if (this.props.ingredients.includes(val)) {
      return;
    }

    // no empty strings
    if (val.trim(' ') === '') {
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
        <Button basic fluid circular>
          Search
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  cocktails: state.cocktails.cocktails,
  ingredients: state.cocktails.ingredients,
});

const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators(cocktailActionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
