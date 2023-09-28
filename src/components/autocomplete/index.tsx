import { Autocomplete, TextField } from '@mui/material';

type Props = {
  items: any;
  label: string;
  value: any;
  setValue: any;
};
const AutoCompleteInput = ({ items, label, value, setValue }: Props): JSX.Element => (
    <Autocomplete
      value={value}
      onChange={(event: any, newValue: string | null) => {
        setValue(newValue);
      }}
      disablePortal
      id="combo-box-demo"
      options={items}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );

export default AutoCompleteInput;
