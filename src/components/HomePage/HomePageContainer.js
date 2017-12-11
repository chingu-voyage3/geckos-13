import React from 'react';
import SearchContainer from '../Search/SearchContainer';
import CocktailContainer from '../Cocktails/CocktailContainer';
import './HomePage.css';

class HomePageContainer extends React.Component {
  render() {
    return (
      <div className="homepage-container">
        <SearchContainer />
        <div className="homepage-content">
          <CocktailContainer />
        </div>
      </div>
    );
  }
}
export default HomePageContainer;
