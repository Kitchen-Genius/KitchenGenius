import React, { useEffect, useState } from 'react';
import Json from '../../csv_files/main course_processed_recipes.json';
import axios from 'axios'; 

export default function MainP2(props) {
  const [selector, setSelector] = useState([]);
  const [recipeJson, setRecipeJson] = useState([]);
  const timeOptions = [25, 30, 40, 50];
  const [alreadyDisplayed, setAlreadyDisplayed] = useState([]);
  const [ingredientCount, setIngredientCount] = useState(0);

  const getRandomTime = () => {
    const randomIndex = Math.floor(Math.random() * timeOptions.length);
    return timeOptions[randomIndex];
  };

  useEffect(() => {
    setRecipeJson(Json);
    console.log(recipeJson);

    const putRecipeCard = () => {
      Object.entries(recipeJson).forEach(([key, value]) => {

            setSelector((prevSelector) => [
              ...prevSelector,
              <>
                <div className='leftContainer'>
                  <h1 className='subTitle'>{value.title}</h1>
                  <div className= 'text_container'>
                    <p className='time'>time: {getRandomTime()}</p>
                    <p className='difficulty'></p>
                    
                    <button className='start_button'>Start</button>
                  </div>
                </div>
                <div className='rightContainer'>
                  <div className='recPic'><img src={value.image} alt="img" /></div>
                </div>
              </>
            ]);
        
      });
    };

    putRecipeCard();
  }, [recipeJson]);

  return (
    <div className='recPList'>
      {selector}
    </div>
  );
}
