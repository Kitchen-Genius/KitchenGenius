import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const DiscreteSlider = (props) => {
  const valueLabelFormat = (value) => {
    if (value <= 30) {
      return 'Beginner';
    } else if (value <= 60) {
      return 'Intermediate';
    } else if (value <= 90) {
      return 'Expert';
    }
  };

  const handleChange = (event, value) => {
    let levelOfCooking = [];

    if (value <= 30) {
      levelOfCooking = "Beginner";
    } else if (value <= 60) {
      levelOfCooking = "Intermediate";
    } else if (value <= 90) {
      levelOfCooking = "Expert";
    }

    // Update the ingredient list using setIngredientList
    props.setIngredientList((prevList) => {
      const updatedList = {
        ...prevList,
        levelOfCooking
      };

      

      return updatedList;
    });
  };

  return (
    <Box sx={{ width: 200 }}>
      <Slider
        sx={{
          marginLeft: '32px',
        }}
        aria-label="Temperature"
        defaultValue={30}
        valueLabelFormat={valueLabelFormat}
        valueLabelDisplay="auto"
        step={30}
        marks
        min={30}
        max={90}
        onChange={handleChange}
      />
    </Box>
  );
};

export default DiscreteSlider;
