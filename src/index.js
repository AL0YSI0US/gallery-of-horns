import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';

// x-------------------------------------------------------------------------------T O . D O-------x]]]]
// [[[x- done]]] Import the data.json file into your App component 
//               and send that data into the Main     component 
// [[[x- done]]] Map over the JSON data in your Main component 
//               to render each beast
// [[[x- done]]] Send a function into your Main component that allows 
//               the user to update state in the App
// [[[x- done]]] Create a SelectedBeast component and include it in your App.
// [[[x- done]]] Use the state in the App to render an individual beast in a 
//               Modal in the SelectedBeast component using React Bootstrap
// x-------------------------------------------------------------------------------T O . D O-------x]]]]

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
