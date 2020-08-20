import React from 'react';

import { RandomMeal, Meal } from './components';




function App() {
  return (
    <div className="App">

   <h1 className="headline"> Welcome to check our latest Recipes !<span> 🥰 🧚 😋 </span> </h1>
    <section className="container">



    <h2 className="headline"> Featured Meal  <span>  🌭 🍔 🍟 🍕 🥪 🥙 🧆 🌮 🌯 🥗 🥘 🍷 </span> </h2>

    <RandomMeal />

    </section>


    <section className="container">

    <Meal />


    </section>


     <section className="container">

    <Meal />


    </section>

   

    </div>
  );
}

export default App;
