import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import Decks from './components/Decks'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Decks/>
      </div>
    );
  }


}

export default App;
