import { Autocomplete, TextField } from '@mui/material';

import { useQueryClientContext } from '../context/QueryClientContext';

const Search = ({
  onChange,
}: {
  tags: string[];
  onChange: (newTags: string[]) => void;
}): JSX.Element => {
  const { currentMember } = useQueryClientContext();

  const onChangeTags = (_e: unknown, newValue: string[]) => {
    onChange(newValue);
  };

  return (
    <Autocomplete
      multiple
      freeSolo
      aria-label="Filters"
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
            width: currentMember ? 250 : 500,
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
