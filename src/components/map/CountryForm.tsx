import { useMap } from 'react-leaflet';

import { Autocomplete, Paper, TextField } from '@mui/material';

import countries from '../../data/output.json';
import { Country } from '../../types';

const CountryForm = ({ setCenter }: any): JSX.Element => {
  const map = useMap();
  const onChange = (_event: any, newValue: Country | null) => {
    if (newValue) {
      // necessary to move map
      setCenter({
        lat: (newValue.maxBoundary[0] - newValue.minBoundary[0]) / 2,
        lin: (newValue.maxBoundary[1] - newValue.minBoundary[1]) / 2,
      });
      map.fitBounds([newValue.minBoundary, newValue.maxBoundary]);
    }
  };

  return (
    <div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100vh',
          width: '100vw',
          background: 'rgba(0,0,0,0.5)',
          zIndex: 450,
        }}
      />
      <Paper
        style={{
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          position: 'absolute',
          zIndex: 450,
          background: 'white',
          borderRadius: 15,
        }}
      >
        <Autocomplete
          autoSelect
          onChange={onChange}
          disablePortal
          options={countries}
          getOptionKey={(o) => o.name}
          getOptionLabel={(o) => o.name}
          sx={{ minWidth: 300 }}
          InputPr
          // eslint-disable-next-line react/jsx-props-no-spreading
          renderInput={(params) => (
            <TextField
              {...params}
              InputProps={{
                ...params.InputProps,
                sx: { borderRadius: '15px' },
              }}
              label="Select a country"
            />
          )}
        />
      </Paper>
    </div>
  );
};

export default CountryForm;
