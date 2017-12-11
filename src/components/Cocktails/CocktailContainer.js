import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as cocktailActionCreators from '../../redux/cocktails';
import CocktailThumbnail from './CocktailThumbnail';

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
            <Link to={`/home/cocktails/${c.id}`} key={i}>
              <CocktailThumbnail {...c} />
            </Link>
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
