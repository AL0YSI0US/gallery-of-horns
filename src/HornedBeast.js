import React from 'react';
import Card from 'react-bootstrap/Card';


//             This will all need to track what was clicked and send it to App.js 
//
// x-------------------------------------------------------------------------------T O . D O-------x]]]]
// "The onClick should be happening on the image instead of the Card." 
//                           - TA Bryant
//
// [x] R E F A C T O R > C O D E
// x-------------------------------------------------------------------------------T O . D O-------x]]]]

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slapaaHeartOnIt: 0,
    }
  }
  buttonClicked = () => {
  this.setState({slapaaHeartOnIt: this.state.slapaaHeartOnIt + 1});
  this.props.showModal(this.props.title);
}
  render() {
    
    // [x] R E F A C T O R > C O D E
    const image = this.props.img;
    const title = this.props.title;
    const description = this.props.description;

    return (
      <div>
        <Card style={{ width: '18rem' }}
          onClick={this.buttonClicked}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Card.Text>❤️ = {this.state.slapaaHeartOnIt}</Card.Text>
            </Card.Body>
        </Card>
      </div>
    )
  }
}

export default HornedBeast;
