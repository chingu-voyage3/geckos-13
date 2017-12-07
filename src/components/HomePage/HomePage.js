import React from 'react';
import Search from '../Search/Search';
import './HomePage.css';

class HomePage extends React.Component {
  render() {
    return (
      <div className="homepage-container">
        <Search />
        <div className="homepage-content" />
      </div>
    );
  }
}
export default HomePage;
