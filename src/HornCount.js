
import React from 'react';
import {Container, Form} from 'react-bootstrap'


import data from './data.json'

// x----------------------------------------------------------------------------(((- D O N E -)))---]]]]
// [x] import react
// [x] import my bootstrappy things
// [x] export the component to the App
// [x] refactor if multiple bootstrap elements are present
// [x] import data from json file 
// [x] create a new Class component
// [x] TODO: create a 'Form' component at the top of the app 
//     - located between 'About' and the 1st column of cards 
//     - Form allows user to view images based on number of horns
// [x] add Form element to the Main Component
// D O C U M E N T A T I O N
// CONTAINER : { `Container` } [react-bootstrap](https://react-bootstrap.github.io/layout/grid/) 
// FORM: { `Form` } [react-bootstrap](https://react-bootstrap.github.io/components/forms/)
// x-------------------------------------------------------------------------------T O . D O-------x]]]]
// [o] R E F A C T O R > C O D E
// [o] handleState
// [o] what parts of the form do i need?
// [o] how do i access the data i need? [KEYS]?
// x-------------------------------------------------------------------------------T O . D O-------x]]]]


class HornCount extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      lilBeastieData: data,
      selectedHornCount: 0,
    }
  }
  buttonClicked = () => {
    this.setState({selectedHornChoice: this.state.selectedHornCoice});
    

  }
    render() {
    return (
      <Container>
        <Form>
          <Form.Group controlId="hornedChoices.ControlSelect1">
          <Form.Label>View a beast by number of horns</Form.Label>
          <Form.Control as="select">
            <option>1</option>
            {/*                   number of horns?????         */}
            <option>2</option> 
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
      </Form>
      </Container>
    )
  }
}

export default HornCount;
