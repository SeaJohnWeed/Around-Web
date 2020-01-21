import React from 'react';
import {Topbar} from "../components/Topbar"
import {Register} from "../components/Register"
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Register/>
    </div>
  );
}

export default App;
