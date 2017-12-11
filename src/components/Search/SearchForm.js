import React from 'react';
import Autosuggest from 'react-autosuggest';
import { Form } from 'semantic-ui-react';
import { func } from 'prop-types';

// styles
import './Search.css';

export const ingredientsSuggestions = [
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
  {
    name: 'Ginseng',
    id: 'ginseng',
  },
];

/* calculate suggestions for any given input value.
   return suggestions that start with the same letters as the input value
*/
export const getSuggestions = value => {
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
export const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
export const renderSuggestion = suggestion => <div>{suggestion.name}</div>;

class SearchForm extends React.Component {
  state = {
    value: '',
    suggestions: [],
  };

  static propTypes = {
    onAddIngredient: func.isRequired,
  };

  onChange = (event, { newValue }) => {
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
    const { value, suggestions } = this.state;

    // pass these props to the input.
    const inputProps = {
      placeholder: 'Enter you ingredients and hit enter',
      value,
      onChange: this.onChange,
      onKeyPress: this.handleAddIngredient,
    };

    return (
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
    );
  }
}

export default SearchForm;
