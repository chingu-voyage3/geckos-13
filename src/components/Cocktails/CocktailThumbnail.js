import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';
import './Cocktails.css';

const tasteColors = {
  fresh: 'green',
  fruity: 'purple',
  sweet: 'pink',
  sour: 'olive',
};

export default function CocktailThumbnail({ id, name, img, skill }) {
  return (
    <div className="cocktail-thumbnail">
      <img src={img} alt={name} className="cocktail-thumbnail-image" />
      <div className="cocktail-thumbnail-info">
        <h4>{name}</h4>
        <p>{`Level: ${skill.name}`}</p>
      </div>
    </div>
  );
}
