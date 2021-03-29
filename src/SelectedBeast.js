import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// x-------------------------------------------------------------------------------T O . D O-------x]]]]
// [[[x- done]]] Create a SelectedBeast component and include it in your App.
//
// [[[x- done]]] Use the state in the App to render an individual beast in a 
//               Modal in the SelectedBeast component using React Bootstrap
//
// [x] Import a bootstrap "Block Level Button" - https://react-bootstrap.github.io/components/buttons/  
// [o] Style button with a hover color
// [x] Color Background
// [o] Set a margin of 10px between the rows
// [x] Style the H1 [import a google font?]
// x-------------------------------------------------------------------------------T O . D O-------x]]]]

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal show={this.props.displayModal} onHide={this.props.hideModal}>
      <Modal.Dialog>
        <Modal.Header>
          <h2>Lil Horned Beasties</h2>
        </Modal.Header>
        <Modal.Body>
        <Card style={{ width: '26rem'}}>
        <Card.Img src={this.props.selectedBeast.image_url} />
            <Card.Body>
              <Card.Title>{this.props.selectedBeast.title}</Card.Title>
              <Card.Text>{this.props.selectedBeast.description}</Card.Text>
              <Card.Text>{this.props.selectedBeast.keyword}</Card.Text>
              <Button onClick = {this.props.hideModal} variant="primary" size="lg" block>C L O S E</Button>
            </Card.Body>
        </Card>
      </Modal.Body>
      </Modal.Dialog>
      </Modal>
    )
  }
}

export default SelectedBeast;