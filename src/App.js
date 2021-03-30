import React from 'react';
import './App.css';

import Header from './Header.js';
import About from './About.js'
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
//
//     Stretch Goal: Fuzzy search: 
//     As a user, I want the ability to search my images so that I can view 
//     only the images containing specific [titles] or [keywords].
//
// Given that a user wants to view specific images, when the user enters a 
// character into the search field only the images matching the 
// current set of characters should be displayed on the screen.
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
        <About />
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


//                                                                  D R O P D O W N
// import DropdownButton from 'react-bootstrap/DropdownButton'

// <>
//   {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
//     (variant) => (
//       <SplitButton
//         key={variant}
//         id={`dropdown-split-variants-${variant}`}
//         variant={variant.toLowerCase()}
//         title={variant}
//       >
//         <Dropdown.Item eventKey="1">Action</Dropdown.Item>
//         <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
//         <Dropdown.Item eventKey="3" active>
//           Active Item
//         </Dropdown.Item>
//         <Dropdown.Divider />
//         <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
//       </SplitButton>
//     ),
//   )}
// </>                         // https://react-bootstrap.netlify.app/components/dropdowns/#dropdowns