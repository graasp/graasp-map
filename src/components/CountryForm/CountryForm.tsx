import { Autocomplete, Popper, PopperProps, TextField } from '@mui/material';

import countries from '../../data/countries.json';
import { Country } from '../../types';

const CustomPopper = ({
  placement = 'auto',
}: {
  placement: PopperProps['placement'];
}) =>
  // eslint-disable-next-line func-names
  function (props: PopperProps): JSX.Element {
    return (
      <Popper
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        style={{ width: '100%' }}
        popperOptions={{ placement }}
      />
    );
  };

export type CountryFormProps = {
  onChange: (newValue: Country) => void;
  label?: string;
  placement?: PopperProps['placement'];
  initialValue?: string;
};

const CountryForm = ({
  onChange,
  label = 'Select a country',
  placement = 'auto',
  initialValue,
}: CountryFormProps): JSX.Element => {
  const handleOnChange = (_event: any, newValue: Country | null) => {
    if (newValue) {
      onChange?.(newValue);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <Autocomplete
        autoSelect
        onChange={handleOnChange as any}
        disablePortal
        defaultValue={countries.find((c) => c.alpha2 === initialValue)}
        options={countries}
        getOptionKey={(o) => o.name}
        getOptionLabel={(o) => o.name}
        sx={{ minWidth: 250 }}
        // set custom popper to force placement
        PopperComponent={CustomPopper({ placement })}
        componentsProps={
          placement !== 'auto'
            ? {
                popper: {
                  modifiers: [
                    {
                      name: 'flip',
                      enabled: false,
                    },
                    {
                      name: 'preventOverflow',
                      enabled: false,
                    },
                  ],
                },
              }
            : {}
        }
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
    </div>
  );
};

export default CountryForm;
