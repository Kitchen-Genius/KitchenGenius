import * as React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';

export default function StandaloneToggleButton() {
  const [selected, setSelected] = React.useState(false);
  const [selected2, setSelected2] = React.useState(false);

  return (
    <>
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
      }}
    >
      <CheckIcon />
    </ToggleButton>
        <ToggleButton
        value="check"
        selected={selected2}
        onChange={() => {
          setSelected2(!selected2);
        }}
      >
        regev
      </ToggleButton>
      </>
  );
}
