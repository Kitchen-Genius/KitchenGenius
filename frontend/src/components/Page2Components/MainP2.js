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
    axios.get('../../csv_files/10recipes.json')
    .then((response) => {
      // Handle successful response
      setRecipeJson(response.data);
    })
    .catch((error) => {
      // Handle error
      console.error('Error fetching JSON:', error);
    });
    console.log(recipeJson);

    const putRecipeCard = () => {
      Object.entries(recipeJson).forEach(([key, value]) => {
        let shouldRender = true;
        let countIngrediets = 0;
        Object.entries(value.ingredients).forEach(([key2, value2]) => { 
              Object.entries(props.ingredientList).forEach(([key3, value3]) => { 
                  if(value3.name === value2.name) {

                      countIngrediets += 1;
                      console.log(countIngrediets);

                  }


              });
        });


          if (props.ingredientList.hasOwnProperty('Vegetarian') && value.vegetarian === false) { 
            shouldRender = false;
          }

          if (props.ingredientList.hasOwnProperty('veryHealthy') && value.veryHealthy === false) {
            shouldRender = false;
          }

          if (props.ingredientList.hasOwnProperty('dairyFree') && value.dairyFree === false) {
            shouldRender = false;
          }
          if (countIngrediets > 1){
          if (shouldRender) {
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
          }
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
