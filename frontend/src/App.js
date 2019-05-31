import React from 'react';
import TopMenu from './components/TopMenu';
import Home from './components/Home';

import './App.css';


class App extends React.Component {
  render() {
    return (
        <div>
            <TopMenu/>
            <Home />
        </div>
    );
  }
}

export default App;
