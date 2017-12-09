import React from 'react';
import propTypes from 'prop-types';
import { Label, Icon } from 'semantic-ui-react';

// label colors
const colors = ['red', 'orange', 'yellow', 'olive', 'green', 'pink'];

IngredientHolder.propTypes = {
  ingredients: propTypes.array.isRequired,
  onRemoveIngredient: propTypes.func.isRequired,
};

export default function IngredientHolder({ ingredients, onRemoveIngredient }) {
  return (
    <div className="ingredients-holder">
      {ingredients.map((ingredient, i) => (
        <Label
          color={colors[i % colors.length]}
          size="tiny"
          key={i}
          value={ingredient}
        >
          {ingredient}
          <Icon name="delete" onClick={e => onRemoveIngredient(ingredient)} />
        </Label>
      ))}
    </div>
  );
}
