import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

// Create a SelectedBeast component and include it in your App
// Use the state in the App to render an individual beast in a Modal in the SelectedBeast component using React Bootstrap

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal show={this.props.displayModal} onHide={this.props.hideModal}>
      <Modal.Dialog>
        <Modal.Header closeButton />
        <Modal.Body>
        <Card style={{ width: '26rem'}}>
        <Card.Img src={this.props.selectedBeast.image_url} />
            <Card.Body>
              <Card.Title>{this.props.selectedBeast.title}</Card.Title>
              <Card.Text>{this.props.selectedBeast.description}</Card.Text>
              <Card.Text>{this.props.selectedBeast.keyword}</Card.Text>
            </Card.Body>
        </Card>
      </Modal.Body>
      </Modal.Dialog>
      </Modal>
    )
  }
}

export default SelectedBeast;

// [[[x- done]]] Import the data.json file into your App component and send that data into the Main component 
// [[[x- done]]] Map over the JSON data in your Main component to render each beast
// [[[x- done]]] Send a function into your Main component that allows the user to update state in the App
// [[[x- done]]] Create a SelectedBeast component and include it in your App
// Use the state in the App to render an individual beast in a Modal in the SelectedBeast component using React Boothstrap