import React from 'react';
import logo from './logo.svg';
import './index.css';
import { Button } from '../Button';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>the most complicated simple app in history</p>
        <Button
          onClick={() => {
            // do something in here
            console.log('this is a thing');
          }}
        >
          Do a thing
        </Button>
      </header>
    </div>
  );
}

export default App;
