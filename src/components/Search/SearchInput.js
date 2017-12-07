import React from 'react';
import Autosuggest from 'react-autosuggest';
import { Form, Button, Label, Icon } from 'semantic-ui-react';
import { array, func } from 'prop-types';

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

// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [
  {
    name: 'C',
    year: 1972,
  },
  {
    name: 'Elm',
    year: 2012,
  },
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : languages.filter(
        lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
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
    this.setState({
      value: newValue,
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const { onAddIngredient, onDeleteIngredient, ingredients } = this.props;
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Type a programming language',
      value,
      onChange: this.onChange,
    };

    // Finally, render it!
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
