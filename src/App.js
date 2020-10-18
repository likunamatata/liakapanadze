import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import Map from './components/Map'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Map />
        <Contact/>
      </div>
    );
  }


}

export default App;
