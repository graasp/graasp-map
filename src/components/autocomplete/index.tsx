import { Autocomplete, TextField } from '@mui/material';

import { Country } from '../../types';

type Props = {
  items: Country[];
  label: string;
  value: Country | null;
  setValue: (c: Country | null) => void;
};
const AutoCompleteInput = ({
  items,
  label,
  value,
  setValue,
}: Props): JSX.Element => (
  <Autocomplete
    value={value}
    onChange={(_event: any, newValue: Country | null) => {
      setValue(newValue);
    }}
    disablePortal
    id="combo-box-demo"
    options={items}
    sx={{ width: 300 }}
    // eslint-disable-next-line react/jsx-props-no-spreading
    renderInput={(params) => <TextField {...params} label={label} />}
    size="small"
  />
);

export default AutoCompleteInput;
