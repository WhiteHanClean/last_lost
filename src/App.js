import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Intro from './pages/intro'

function App() {
  return (
    <div className="App">
      <Header />
      <Intro/>
    </div>
  );
}

export default App;
