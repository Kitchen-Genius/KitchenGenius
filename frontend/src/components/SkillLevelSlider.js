import React, { useState } from 'react';
import '../style/cssP1.css';

const SkillLevelSlider = () => {
  const [skillLevel, setSkillLevel] = useState(50);

  const updateSkillLevel = (event) => {
    const value = parseInt(event.target.value, 10);
    setSkillLevel(value);
  };

  const getSkillLabel = () => {
    if (skillLevel <= 33) {
      return 'Beginner';
    } else if (skillLevel <= 66) {
      return 'Apprentice';
    } else {
      return 'Expert';
    }
  };

  return (
    <div className="slider-container">
      <label htmlFor="skillLevel">Skill Level:</label>
      <input
        type="range"
        id="skillLevel"
        min="0"
        max="100"
        step="1"
        value={skillLevel}
        onChange={updateSkillLevel}
      />
      <div className="dot" style={{ left: `${skillLevel}%` }}></div>
      <p>{getSkillLabel()}</p>
    </div>
  );
};

export default SkillLevelSlider;
