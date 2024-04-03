import { Autocomplete, TextField } from '@mui/material';

import { useQueryClientContext } from '../context/QueryClientContext';

const Search = ({
  onChange,
  invisible = false,
}: {
  invisible?: boolean;
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
          // placeholder={t('Search here...')}
          label="Filters"
          sx={{
            minWidth: currentMember ? '30vw' : '70vw',
            maxWidth: '100%',
          }}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...(invisible
            ? {
                variant: 'standard',
                InputLabelProps: {
                  shrink: true,
                },
                InputProps: {
                  ...params.InputProps,
                  disableUnderline: true,
                },
              }
            : {})}
        />
      )}
      onChange={onChangeTags}
    />
  );
};
export default Search;
