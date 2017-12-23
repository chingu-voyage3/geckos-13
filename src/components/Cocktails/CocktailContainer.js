import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'semantic-ui-react';

// local imports
import * as cocktailActionCreators from '../../redux/cocktails';
import CocktailThumbnail from './CocktailThumbnail';
import CocktailDetail from '../CocktailDetail/CocktailDetail';

// local imports
import './Cocktails.css';

class CocktailContainer extends React.Component {
  // only render the container if there are cocktails to show
  render() {
    const { cocktails } = this.props;
    return cocktails.length ? (
      <div className="cocktails-container">
        <h3>See Anything you like?</h3>
        <div className="cocktails">
          {cocktails.map((c, i) => (
            <Modal
              key={i}
              dimmer="inverted"
              size="large"
              closeIcon
              trigger={
                <Button className="thumbnail-button">
                  <CocktailThumbnail {...c} />
                </Button>
              }
            >
              <CocktailDetail {...c} />
            </Modal>
          ))}
        </div>
      </div>
    ) : null;
  }
}

const mapStateToProps = ({ cocktails }, props) => ({
  cocktails: cocktails.cocktails,
});

const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators({ ...cocktailActionCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CocktailContainer);
