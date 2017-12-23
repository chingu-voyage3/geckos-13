import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//local imports
import * as cocktailActionCreators from '../../redux/cocktails';

// local import
import CocktailDetail from './CocktailDetail';
import './CocktailDetail.css';

class CocktailDetailContainer extends React.Component {
  render() {
    return (
      <div className="cocktail-detail-container">
        <CocktailDetail {...this.props.cocktail} />
      </div>
    );
  }
}

const mapStateToProps = ({ cocktails }, props) => ({
  cocktail: cocktails.selectedCocktail,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...cocktailActionCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(
  CocktailDetailContainer
);
