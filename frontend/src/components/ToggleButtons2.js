import React, { useState } from 'react';
import AppleIcon from '@mui/icons-material/Apple';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza'; // Replace BreadSlice
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage'; // Replace Eco
import EcoIcon from '@mui/icons-material/Nature'; // New nature-related icon
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import '../style/cssP1.css'
const ToggleButtons2 = (props) => {
  const [selectedButtons, setSelectedButtons] = useState([]);

  const buttonIcons = {
    veryHealthy: <AppleIcon />,
    Low_calories: <LocalPizzaIcon />,
    dairyFree: <EmojiFoodBeverageIcon />,
    Gluten_free: <LocalPizzaIcon />,
    Vegetarian: <EcoIcon />,
    High_protein: <FitnessCenterIcon />,
  };

  const buttonColors = {
    veryHealthy: 'rgba(240, 240, 240, 1)',
    Low_calories: 'rgba(240, 240, 240, 1)',
    dairyFree: 'rgba(240, 240, 240, 1)',
    Gluten_free: 'rgba(240, 240, 240, 1)',
    Vegetarian: 'rgba(240, 240, 240, 1)',
    High_protein: 'rgba(240, 240, 240, 1)',
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButtons((prevButtons) => {
      if (prevButtons.includes(buttonName)) {
        // Button is already selected, remove it
        return prevButtons.filter((name) => name !== buttonName);
      } else {
        // Button is not selected, add it
        return [...prevButtons, buttonName];
      }
    });

    props.setIngredientList((prevList) => {
      const updatedList = { ...prevList };

      // Toggle the button in the updatedList
      if (updatedList[buttonName]) {
        delete updatedList[buttonName];
      } else {
        updatedList[buttonName] = true;
      }

      return updatedList;
    });
  };

  const buttonStyle = {
    margin: '0 5px',
    padding: '6px 10px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    border: 'none',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
  };

  const applySelectedStyle = (buttonName) =>
    selectedButtons.includes(buttonName) ? 'rgba(0, 114, 178, 1)' : buttonColors[buttonName];

  return (
    <div className='ToggleInsideButton'>
      {Object.keys(buttonColors).map((buttonName) => (
        <button
          key={buttonName}
          style={{
            ...buttonStyle,
            backgroundColor: applySelectedStyle(buttonName),
            color: applySelectedStyle(buttonName) === 'rgba(0, 114, 178, 1)' ? '#fff' : '#000',
          }}
          onClick={() => handleButtonClick(buttonName)}
        >
          {buttonIcons[buttonName]} {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ToggleButtons2;
