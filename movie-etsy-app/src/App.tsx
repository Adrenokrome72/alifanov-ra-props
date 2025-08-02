import React from 'react';
import Stars from './components/Stars';
import Listing from './components/Listing';
import './App.css';

const App: React.FC = () => (
  <div className="App">
    <h2>Movie Rating</h2>
    <Stars count={4} />
    
    <h2>Etsy Listings</h2>
    <Listing />
  </div>
);

export default App;