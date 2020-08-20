import React from 'react';

import { RandomMeal } from './components';




function App() {
  return (
    <div className="App">

   <h1 className="headline"> Welcome to check our latest Recipes !<span> 🥰 🧚 </span> </h1>
    <section className="container">

    <h2 className="headline"> Featured Meal</h2>

    <RandomMeal />

    </section>

   

    </div>
  );
}

export default App;
