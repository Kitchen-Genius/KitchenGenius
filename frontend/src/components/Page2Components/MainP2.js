import React, { useEffect, useState } from 'react';
import Json from '../../csv_files/10recipes.json';

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
        let shouldRender = true;

        Object.entries(value).forEach(([key2, value2]) => { 
 

          if (props.ingredientList.hasOwnProperty('Vegetarian') && value2.vegetarian === false) { 
            shouldRender = false;
          }

          if (props.ingredientList.hasOwnProperty('veryHealthy') && value2.veryHealthy === false) {
            shouldRender = false;
          }

          if (props.ingredientList.hasOwnProperty('dairyFree') && value2.dairyFree === false) {
            shouldRender = false;
          }

          if (shouldRender) {
            setSelector((prevSelector) => [
              ...prevSelector,
              <>
                <div className='leftContainer'>
                  <h1 className='subTitle'>{value2.title}</h1>
                  <div className= 'text_container'>
                    <p className='time'>time: {getRandomTime()}</p>
                    <p className='difficulty'></p>
                    <p className='reviews'>rating: {value2.spoonacularScore.toFixed(1)}</p>
                    <button className='start_button'>Start</button>
                  </div>
                </div>
                <div className='rightContainer'>
                  <div className='recPic'><img src={value2.image} alt="img" /></div>
                </div>
              </>
            ]);
          }
        });

        if (key === 'id' && !alreadyDisplayed.includes(value)) {
          setAlreadyDisplayed((prevDisplayed) => [...prevDisplayed, value]);
          console.log(alreadyDisplayed);

          let title = '';
          let spoonacularScore = '';

          Object.entries(recipeJson).forEach(([key, value]) => {
            if (key === 'title') {
              title = value;
            } else if (key === 'spoonacularScore') {
              spoonacularScore = value;
            }
          });
        }
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
