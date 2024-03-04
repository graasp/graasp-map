import { Autocomplete, TextField } from '@mui/material';

const Search = ({
  onChange,
}: {
  tags: string[];
  onChange: (newTags: string[]) => void;
}): JSX.Element => {
  const onChangeTags = (_e: unknown, newValue: string[]) => {
    onChange(newValue);
  };

  return (
    <Autocomplete
      multiple
      freeSolo
      options={[]}
      renderInput={(params) => (
        <TextField
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...params}
          placeholder="Search here..."
          variant="standard"
          label="Filters"
          InputProps={{
            ...params.InputProps,
            disableUnderline: true,
          }}
          sx={{
            width: 250,
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      )}
      onChange={onChangeTags}
    />
  );
};
export default Search;
