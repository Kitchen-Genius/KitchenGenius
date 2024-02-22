import React, { useState } from 'react';
import AppleIcon from '@mui/icons-material/Apple';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza'; // Replace BreadSlice
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage'; // Replace Eco
import CoffeeTwoToneIcon from '@mui/icons-material/CoffeeTwoTone';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import CookieIcon from '@mui/icons-material/Cookie';
import '../../style/cssP1.css'

const ToggleButtons = (props) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const buttonIcons = {
    breakfast: <CoffeeMakerIcon />,
    lunch: <CoffeeTwoToneIcon />,
    dinner: <DinnerDiningIcon />,
    dessert: <CookieIcon />,
  };

  const buttonColors = {
    breakfast: 'rgba(240, 240, 240, 1)',
    lunch: 'rgba(240, 240, 240, 1)',
    dinner: 'rgba(240, 240, 240, 1)',
    dessert: 'rgba(240, 240, 240, 1)',
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);

    props.setIngredientList((prevList) => {
      const updatedList = { ...prevList, [buttonName]: true };

      // Unselect all other buttons
      Object.keys(prevList).forEach((key) => {
        if (prevList[key] === true || prevList[key] === false) {
          if (key !== buttonName) {
            updatedList[key] = false; // Set other buttons to false
          }
        }

        Object.keys(updatedList).forEach((key) => {
          if (prevList[key] === true || prevList[key] === false) {
            if (key !== buttonName) {
              // Omit other buttons from the updated list
              delete updatedList[key];
            }
          }
        });
      });

      return updatedList;
    });
  };

  const buttonStyle = {
    margin: '0 5px',
    padding: '6px 5px', // Add padding
    borderRadius: '8px', // Add border-radius
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    border: 'none',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    
    
  };

  return (
    <div className='insideButtons'>
      <button
        style={{
          ...buttonStyle,
          backgroundColor: selectedButton === 'breakfast' ? 'rgba(0, 114, 178, 1)' : buttonColors.breakfast,
        }}
        onClick={() => handleButtonClick('breakfast')}
      >
        {buttonIcons['breakfast']} Breakfast
      </button>
      <button
        style={{
          ...buttonStyle,
          backgroundColor: selectedButton === 'lunch' ? 'rgba(0, 114, 178, 1)' : buttonColors.lunch,
        }}
        onClick={() => handleButtonClick('lunch')}
      >
        {buttonIcons['lunch']} Lunch
      </button>
      <button
        style={{
          ...buttonStyle,
          backgroundColor: selectedButton === 'dinner' ? 'rgba(0, 114, 178, 1)' : buttonColors.dinner,
        }}
        onClick={() => handleButtonClick('dinner')}
      >
        {buttonIcons['dinner']} Dinner
      </button>
      <button
        style={{
          ...buttonStyle,
          backgroundColor: selectedButton === 'dessert' ? 'rgba(0, 114, 178, 1)' : buttonColors.dessert,
        }}
        onClick={() => handleButtonClick('dessert')}
      >
        {buttonIcons['dessert']} Dessert
      </button>
    </div>
  );
};

export default ToggleButtons;
