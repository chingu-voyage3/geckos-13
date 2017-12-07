import React from 'react';
import Autosuggest from 'react-autosuggest';
import { Form, Button, Label, Icon } from 'semantic-ui-react';
import { array, func } from 'prop-types';

// styles
import './Search.css';

const colors = [
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
];

const ingredientsSuggestions = [
  {
    name: 'Vodka',
    id: 'vodka',
  },
  {
    name: 'Gin',
    id: 'gin',
  },
  {
    name: 'Rum',
    id: 'rum',
  },
];

/* calculate suggestions for any given input value.
   return suggestions that start with the same letters as the input value
*/
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : ingredientsSuggestions.filter(
        lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

/* When a suggestion is clicked, populate the input with
   the clicked value
 */
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => <div>{suggestion.name}</div>;

class SearchForm extends React.Component {
  state = {
    value: '',
    suggestions: [],
  };

  static propTypes = {
    ingredients: array.isRequired,
    onAddIngredient: func.isRequired,
    onDeleteIngredient: func.isRequired,
  };

  onChange = (event, { newValue }) => {
    console.log(newValue);
    this.setState({
      value: newValue,
    });
  };

  handleAddIngredient = e => {
    // Only add ingredient if enterkey is pushed
    if (e.charCode !== 13) {
      return;
    }

    this.props.onAddIngredient(this.state.value);
    this.setState({ value: '' });
  };

  // called when suggestions are updated
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  // call when clearing the suggestions
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const { onAddIngredient, onDeleteIngredient, ingredients } = this.props;
    const { value, suggestions } = this.state;

    // pass these props to the input.
    const inputProps = {
      placeholder: 'Enter you ingredients and hit enter',
      value,
      onChange: this.onChange,
      onKeyPress: this.handleAddIngredient,
    };

    return (
      <div className="search-container">
        <h3>Add your ingredients</h3>
        <Form size="large">
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
          />
        </Form>
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
                onClick={e => onDeleteIngredient(ingredient, e)}
              />
            </Label>
          ))}
        </div>
        <Button basic color="red" fluid circular>
          Search
        </Button>
      </div>
    );
  }
}

export default SearchForm;
