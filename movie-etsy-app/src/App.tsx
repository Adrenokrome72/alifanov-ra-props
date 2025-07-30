import React from 'react';
import Stars from './components/Stars';
import Listing from './components/Listing';
import etsyData from './data/etsy.json';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <section>
        <h2>Movie Rating:</h2>
        <Stars count={3} />
      </section>
      
      <section>
        <h2>Etsy Listings:</h2>
        <Listing items={etsyData as any[]} />
      </section>
    </div>
  );
};

export default App;