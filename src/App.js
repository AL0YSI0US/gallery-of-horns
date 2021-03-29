import React from 'react';
import './App.css';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

import SelectedBeast from './SelectedBeast'

import data from './data.json'

// x-------------------------------------------------------------------------------T O . D O-------x]]]]
// [[[x- done]]] Import the data.json file into your App component 
//               and send that data into the Main component 
//
// [[[x- done]]] Use the state in the App to render an individual 
//               beast in a Modal in the SelectedBeast component 
//               using React Bootstrap.
// x-------------------------------------------------------------------------------T O . D O-------x]]]]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false,
      lilBeastieData: data,
      selectedBeast: {}
    }
  }

  showModal = (name) => {

    const selectedBeast = data.find(beast => beast.title === name);
    this.setState({selectedBeast, displayModal:true});
  }

  hideModal = () => {this.setState({displayModal: false});
  }

  render() {
    return (
      <div>
        <Header />
        <Main 
          showModal={this.showModal}
          beasts={this.state.lilBeastieData} 
        />
        <SelectedBeast 
          displayModal={this.state.displayModal}
          hideModal={this.hideModal}
          selectedBeast={this.state.selectedBeast}
        />
        <Footer />
      </div> 
    )
  }
}



export default App;
