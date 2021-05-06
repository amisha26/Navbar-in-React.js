import React, { Component } from 'react';
import Navbars from './components/Navbars';
import {BrowserRouter as Router} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbars />
      </Router>
    );
  }
}

export default App;
