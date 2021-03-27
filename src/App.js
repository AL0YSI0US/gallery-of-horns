import React from 'react';
import './App.css';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

import data from './data.json'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lilBeastieData: data,
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Main beasts={this.state.lilBeastieData} />
        <Footer />
      </div> 
    )
  }
}

export default App;
