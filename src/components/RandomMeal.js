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

		

		<div className="meal-img">

  

      <img src={strMealThumb} alt={strMeal} />


    </div>

    <div className="meal-details">

      <h3>Latest Recipe Blogs </h3>

      <h1 className="meal-title">{strMeal}</h1>
      <p className="meal-instruction"> {strInstructions.substring(0, 200) + "..."} </p>

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

       <button className="btn">
        View Recipe here  <span> 👉 </span> <i className="fas fa-arrow-alt-circle-right"></i>

       </button>

    </div>

		</div>





	);



};


export default RandomMeal;