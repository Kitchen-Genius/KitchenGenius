import { Form, Navigate } from 'react-router-dom';
import '../style/cssP1.css';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import ToggleButtons from './Page1Components/ToggleButtons';
import SkillLevelSlider from './SkillLevelSlider';
import DiscreteSlider from './DiscreteSlider';
import ToggleButtons2 from './ToggleButtons2';
import { useNavigate } from 'react-router-dom';
import ToggleButton from './ToggleButton'
import ComboBox from './ComboBox';
var newIdCounter = 0;


export default function MainP1() {
  const [ingredient, setIngredient] = useState('');
  const [ingredientList, setIngredientList] = useState({});
  const [specialRequests, setSpecialRequests] = useState('');
  

  const renderIngredients = () => {
    return (
     <div>
       <ul>
        {Object.keys(ingredientList)
        .slice(-5)
        .map((ingredientName, index) =>
        ingredientName !== "levelOfCooking" &&
        ingredientName !== "dessert" &&
        ingredientName !== "dinner" &&
        ingredientName !== "lunch" &&
        ingredientName !== "breakfast" &&
        ingredientName !== "specialRequests" &&
        ingredientName !== "Nut_free" && 
        ingredientName !== "Low_calories" &&
        ingredientName !== "Lactose_free" &&
        ingredientName !== "Gluten_free" &&
        ingredientName !== "Vegetarian" && 
        ingredientName !== "High_protein" ? (
        <li className="MainDisplayedIngredents" key={index}>
          {ingredientName}
        </li>
      ) : null
)}
      </ul>
    </div>
    );
  };

  const handleSpecialRequestsChange = (event) => {
    setSpecialRequests(event.target.value)

  }

  const handleSpecialRequestsSubmit = (event) => {
    event.preventDefault();
      setIngredientList((ingredientList) => {
      const updatedList = {
        ...ingredientList,
          specialRequests
      };
      setSpecialRequests('')
      return updatedList;
    });
  }
  const handleInputChange = (event) => {
    setIngredient(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (ingredient.length === 0) {
      console.log("error it's an empty input");
      return;
    }
  
 
    if (ingredientList.hasOwnProperty(ingredient)) {
      console.log("This ingredient is already added");
       return;
    }
    newIdCounter = newIdCounter + 1;
    console.log(newIdCounter)

    
    setIngredientList((prevList) => ({
      ...prevList,
      [ingredient]: { id: newIdCounter, name: ingredient },
    }));
    
    {console.log(ingredientList);}
    setIngredient('');
  };

  const submitSearch = ()=> {
    if (Object.keys(ingredientList).length === 0) {
      console.log("Please insert ingredients and choose from the menu");
      return;
    }
    const serverEndpoint = '/api/saveIngredients';

    fetch(serverEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
     },
      body: JSON.stringify(ingredientList),
})
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
          return response.json();
      })
      .then(data => {
        console.log('Server response:', data);
          // You can perform additional actions based on the server response here
          return;
      })
      .catch(error => {
        console.error('Error during fetch operation:', error);
          // Handle error scenarios here
          return;
      });
       /* Navigate("/HeaderP1") */
  }
  return (
    <div className="Main">
      <h1 className="Main_upper_text">What Would You Like To Cook?</h1>
      <h5 className="ingredients">ingredients: </h5>
      <div className="ingredients_box">
        <form className="ingredients_box_form" onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              value={ingredient}
              onChange={handleInputChange}
              placeholder="type here"
            ></input>
          </label>
          <label>
            <button type="submit">Add Here</button>
          </label>
          {renderIngredients()}
        </form>
      </div>
      <div className='Meal_select'>
        <p>what meal?</p>
        <div className='buttons'>
        <ToggleButtons
            ingredientList={ingredientList}
            setIngredientList={setIngredientList}
          />
        </div>
      </div>
      <div className='Skill_bar'>
            <p>skill level</p>
            <DiscreteSlider ingredientList={ingredientList} setIngredientList={setIngredientList}/>
      </div>
      <div className="Any_special">
        <p>Any special requests?</p>
        <form onSubmit={handleSpecialRequestsSubmit}>
          <input type='text' value={specialRequests} onChange={handleSpecialRequestsChange} placeholder="type here..." ></input>
          <label>
          <button type='submit'>click</button>
          </label>
        </form>
        <div className='ToggleButtons2'>
        <ToggleButtons2
            ingredientList={ingredientList}
            setIngredientList={setIngredientList}
          />
        </div>
        <button className='finalSubmit' onClick={submitSearch}>Search</button>
      </div>
      <div>
        <ComboBox 
          ingredientList={ingredientList}
          setIngredientList={setIngredientList}
        />
      </div>
    </div>
  );
}


/*            <ul>
              {Object.keys(ingredientList).map((ingredientName, index) => (
                <li className="MainDisplayedIngredents" key={index}>
                  {ingredientName}
                  
                  </li>
                  ))}

                          <ToggleButtons2
            ingredientList={ingredientList}
            setIngredientList={setIngredientList}        זה מה שעובד
          />

                </ul>  */