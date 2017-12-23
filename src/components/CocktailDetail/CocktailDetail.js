import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  Header,
  Button,
  Icon,
  Image,
  Divider,
  Embed,
} from 'semantic-ui-react';

// local imports

export default function CocktailDetail({
  name,
  img,
  ingredients,
  descriptionPlain,
  videoId,
}) {
  return (
    <div className="cocktail-modal">
      <Modal.Header>{name}</Modal.Header>
      <Divider />
      <Modal.Content image className="cocktail-modal-content">
        <div className="row-1">
          <Image wrapped size="medium" src={img} />
          <Modal.Description className="ingredients">
            <Header>Ingredients</Header>
            {ingredients.map((ing, i) => <p>{ing.textPlain}</p>)}
          </Modal.Description>
          <Modal.Description className="description">
            <Header>Mix it</Header>
            {descriptionPlain}
          </Modal.Description>
        </div>
      </Modal.Content>
      <Embed id={videoId} brandedUI source="youtube" placeholder={img} />
    </div>
  );
}
