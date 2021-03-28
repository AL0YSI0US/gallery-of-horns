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