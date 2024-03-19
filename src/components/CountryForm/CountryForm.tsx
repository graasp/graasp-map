import { Autocomplete, TextField } from '@mui/material';

import countries from '../../data/countries.json';
import { Country } from '../../types';

export type CountryFormProps = {
  onChange: (newValue: Country) => void;
  label?: string;
};

const CountryForm = ({
  onChange,
  label = 'Select a country',
}: CountryFormProps): JSX.Element => {
  const handleOnChange = (_event: any, newValue: Country | null) => {
    if (newValue) {
      onChange?.(newValue);
    }
  };

  return (
    <Autocomplete
      autoSelect
      onChange={handleOnChange as any}
      disablePortal
      options={countries}
      getOptionKey={(o) => o.name}
      getOptionLabel={(o) => o.name}
      sx={{ minWidth: 300 }}
      renderInput={(params) => (
        <TextField
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...params}
          InputProps={{
            ...params.InputProps,
            sx: { borderRadius: '15px' },
          }}
          label={label}
        />
      )}
    />
  );
};

export default CountryForm;
