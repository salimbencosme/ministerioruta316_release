import React, { Component } from 'react';
import './App.css';
import Main from '../src/containers/Main'
import './resources/vendor/bootstrap/css/bootstrap.min.css';
import './resources/vendor/font-awesome/css/font-awesome.min.css';
import './resources/vendor/devicons/css/devicons.min.css';
import './resources/vendor/simple-line-icons/css/simple-line-icons.css';
import './resources/css/resume.css';

class App extends Component {
  render() {
    return (
        <Main/>
    );
  }
}

export default App;
