import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Papa from 'papaparse';

export default function ComboBoxnoFiltter() {
  const [ingredientOptions, setIngredientOptions] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.PUBLIC_URL + '/csv_files/top-1k-ingredients.csv');

        console.log('Response Status:', response.status);
        console.log('Response Content Type:', response.headers.get('content-type'));

        const text = await response.text();

        Papa.parse(text, {
          delimiter: ';', // Specify the delimiter
          header: false,
          complete: (result) => {
            console.log('Parsed CSV data:', result.data);
            setIngredientOptions(result.data.map((row) => ({ label: row[0], code: row[1] })));
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
      getOptionLabel={(option) => option.label} // Return only the label
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Ingredient" />}
    />
  );
}
