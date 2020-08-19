import React, { useState, useEffect } from 'react';


const API_URL = 'https://www.themealdb.com/api/json/v1/1/random.php';





const RandomMeal = () => {

  const [meal, setMeal] = useState(undefined);


  useEffect(async () => {

  	const res = await fetch(API_URL);

  	const randomMeal = await res.json();


  	setMeal(randomMeal);

  }, [])




  if(!meal) return null;




	return (

		<div>

		<h1>

		{meal.strMeal}


		</h1>

		</div>





	);



};


export default RandomMeal;