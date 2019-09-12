import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typing from 'react-typing-animation';
import Title from './Components/title';
import Search from './Components/search';

class App extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <Search />
      </div>
    );
  }
}

export default App;
