import React, { Component } from 'react';
import 'tachyons/css/tachyons.min.css'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="mw-1024 pa-2 pa-6-l center">
          <h1 className="dib mt5">See in primitives</h1>
          <div>
            <div className="fl-l w-50 relative">
              <img className="w-100" src="https://github.com/vincentdesmares/node-primitive/raw/master/samples/profile.png" />
              <div className="absolute w-100 h-100 top-0 left-0">
                <div className="flex items-center flex-column">
                  <div className="absolute bg-white o-70 w-30 f6 mt7 pa2 tc br4 glow pointer ba">Upload</div>
                </div>
              </div>
            </div>
            <div className="fl-l w-50"><img className="w-100" src="https://github.com/vincentdesmares/node-primitive/raw/master/samples/generated.png" /></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
