import { useEffect, useState } from 'react';
import my_Images from '../../my_Images/kitchengenius.png';
import axios from 'axios';
import '../../style/cssP2.css';


export default function HeaderP2(props) {
    const [Intolerances, SetIntolerances] = useState([]);
    const [Ingredients, SetIngredients] = useState([]);
    const [Level, SetLevel] = useState([]);
  
    useEffect(() => {
      const receiveIntoFunc = () => {
        const intolerances = Object.keys(props.ingredientList).filter(
          (ingredient) =>
            [
              'High_protein',
              'Low_calories',
              'Vegetarian',
              'Lactose_free',
              'Gluten_free',
              'Nut_free',
            ].includes(ingredient)
        );
  
        SetIntolerances(intolerances);

        const ingredients = Object.entries(props.ingredientList)
        .filter(([, value]) => typeof value === 'object') // Filter based on the type of value
        .map(([key]) => key); // Map back to the keys
  
      SetIngredients(ingredients);
    };
    const level = props.ingredientList.hasOwnProperty('levelOfCooking')
      ? props.ingredientList.levelOfCooking
      : null; // Set level to null if levelOfCooking doesn't exist

    // Only set Level state if levelOfCooking is present
    if (level !== null) {
      SetLevel(level);
    }
      receiveIntoFunc();
    }, [props.ingredientList]);
  
    const buttonStyle = {
      width: '100px',
      margin: '2px 5px',
      padding: '6px 10px',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      border: 'none',
      fontFamily: 'Arial, sans-serif',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'rgba(240, 240, 240, 1)', // Adjust the background color as needed
      color: '#000', // Adjust the text color as needed
    };
  
    return (
      <>
        <div className="kitchenIMG">
          <img src={my_Images} alt="kitchengenius" />
        </div>
        <div className="Rectangle_gray_p2">
          <div className="Bell_p2"></div>
          <div className="Steven_square_p1">
            <p className="Hader_text_p1">Hi, Steve</p>
            <div className="Steven_pic_p1"></div>
          </div>
        </div>
        <div className="TextP2">
          <p>All the recipes - just for you</p>
        </div>
        <div className="square_ingredients_p2">
          <div className="Intolerances_p2">
            <h3>Intolerances</h3>
            {Intolerances.map((intolerance, index) => (
              <p key={index} style={buttonStyle}>
                {intolerance}
              </p>
            ))}
          </div>
          <div className="Ingredients_p2">
          <h3>Ingredients</h3>
          {Ingredients.map((ingredient, index) => (
              <p key={index} style={buttonStyle}>
                {ingredient}
              </p>
            ))}
           </div>
          <div className="Level"> 
          <h3>Level</h3>
           
              <p style={buttonStyle}>
                {Level}
              </p>
            
             </div>
        </div>
      </>
    );
  }
  