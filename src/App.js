import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './movie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie /> {/*Movie 컴포넌트*/}
      </div>
    );
  }
}

export default App;
