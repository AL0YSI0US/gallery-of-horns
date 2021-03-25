import './App.css';
import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

class HornedBeast extends React.Component {
  render() {
    return(
     <div>
       <h2>{this.props.title}</h2>
       <img src={this.props.img_url} alt={this.props.alt} title={this.props.title}></img>
       <p align="center">{this.props.description}</p>
     </div> 
    )
  }
}
export default HornedBeast;