import './App.css';
import React from 'react';
// import image from 'react-bootstrap/image';
// import Modal from 'react-bootstrap/Modal';

class HornedBeast extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      numberOfClicks: 0
    }
  }

  favoriteClicked = () => {
    this.setState({numberOfClicks: this.state.numberOfClicks + 1});
  }
  showModal: false
};

console.log(data.map(beast => beast.title));
chosenImage = () => {
  console.log('image clicked!');
  this.setState({
    numberOfExclamationPoints: this.state.numberOfExclamationPoints + 1
  });
}

showModal = () => {
  this.setState({showModal: true});
}

hideModal = () => {
  this.setState({showModal: false})
}

  render(){
    return(
     <div>
       <h2>{this.props.title}</h2>
       <img src={this.props.img_url} alt={this.props.alt} title={this.props.title}></img>
       <p>{this.props.description}</p>
       {this.numberOfClicks}
     </div> 
  )
}

export default HornedBeast;