import React, { useState, useEffect } from 'react';

const AutoCompleteInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [allWords, setAllWords] = useState([]);

  useEffect(() => {
    // Fetch words from the JSON file or your API
    fetch('/path/to/words.json')
      .then(response => response.json())
      .then(data => {
        setAllWords(data.words);
      })
      .catch(error => console.error('Error fetching words:', error));
  }, []);

  const handleInputChange = (e) => {
    const input = e.target.value;
    setInputValue(input);

    // Filter words based on user input
    const filteredWords = allWords.filter(word =>
      word.toLowerCase().startsWith(input.toLowerCase())
    );

    // Set suggestions based on filtered words
    setSuggestions(filteredWords);
  };

  const handleSuggestionClick = (suggestion) => {
    // Set input value to the selected suggestion
    setInputValue(suggestion);

    // Clear suggestions
    setSuggestions([]);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type to autocomplete"
      />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutoCompleteInput;
