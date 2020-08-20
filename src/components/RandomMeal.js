import React, { useState, useEffect } from 'react';


const API_URL = 'https://www.themealdb.com/api/json/v1/1/random.php';





const RandomMeal = () => {

  const [meal, setMeal] = useState(undefined);


  useEffect(() => {

  	 // fetch(API_URL)
  	 //   .then(res => res.json())
  	 //   .then(res => {
  	 //   	setMeal(res.meals[0]);

  	 //   });

  	async function getMeal()  {

  		const res = await fetch(API_URL);

  		const data = await res.json();

  		setMeal(data.meals[0]);

  	}

  	getMeal();

  }, []);




  if(!meal) return null;


  const {

    strMeal,

    strMealThumb,
    strInstructions,
    strArea,
    strCategory
  } = meal;






	return (

		<div className="meal">

		<h1>Recipe Meals</h1>

		<div className="meal-img">

      <img src={strMealThumb} alt={strMeal} />


    </div>

    <div className="meal-details">

      <h2 className="meal-title">{strMeal}</h2>
      <p className="meal-instruction"> {strInstructions} </p>

      <ul className="meal-info">

       <li>

       Category
       <strong> {strCategory}</strong>
       </li>

       <li>

       Area

       <strong> {strArea}</strong>

       </li>

       </ul>

    </div>

		</div>





	);



};


export default RandomMeal;