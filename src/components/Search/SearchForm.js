import React from 'react';
import { Form, Button, Label, Icon } from 'semantic-ui-react';

import SearchInput from './SearchInput';

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

function SearchForm({
  ingredients,
  onChange,
  onAddIngredient,
  onDeleteIngredient,
  value,
}) {
  return (
    <div className="search-container">
      <h3>Add your ingredients</h3>
      <Form size="large">
        <Form.Input
          placeholder="Search Ingredient..."
          className="search-input"
          onChange={e => onChange(e.target.value, e)}
          value={value}
          onKeyPress={e => onAddIngredient(e)}
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

export default SearchForm;
