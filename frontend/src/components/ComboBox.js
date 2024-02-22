import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Papa from 'papaparse';

export default function ComboBox({ ingredientList, setIngredientList }) {
  const [ingredientOptions, setIngredientOptions] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/csv_files/top-1k-ingredients.csv');

        const text = await response.text();

        Papa.parse(text, {
          
          header: false,
          complete: (result) => {
            // Filter out duplicate ingredients
            const uniqueIngredients = result.data.reduce((uniqueList, row) => {
              const label = row[0];
              const code = row[1];
              if (!uniqueList.some((item) => item.label === label && item.code === code)) {
                uniqueList.push({ label, code });
              }
              return uniqueList;
            }, []);
            setIngredientOptions(uniqueIngredients);
          },
          error: (error) => {
            console.error('Error parsing CSV:', error);
          },
        });
      } catch (error) {
        console.error('Error fetching CSV:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={ingredientOptions}
      getOptionLabel={(option) => `${option.label} `}
      sx={{ width: 300 }}
      onChange={(event, value) => {
        if (value) {
          setIngredientList((prevList) => ({
            ...prevList,
            [value.label]: { id: value.code, name: value.label },
          }));
        }
      }}
      renderInput={(params) => <TextField {...params} label="Ingredient" />}
    />
  );
}
