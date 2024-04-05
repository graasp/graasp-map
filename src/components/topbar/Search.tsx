import { useTranslation } from 'react-i18next';

import { Autocomplete, TextField } from '@mui/material';

import { useQueryClientContext } from '../context/QueryClientContext';

const Search = ({
  onChange,
  invisible = false,
  tags,
}: {
  invisible?: boolean;
  tags: string[];
  onChange: (newTags: string[]) => void;
}): JSX.Element => {
  const { currentMember } = useQueryClientContext();
  const { t } = useTranslation();

  const onChangeTags = (_e: unknown, newValue: string[]) => {
    onChange(newValue);
  };

  return (
    <Autocomplete
      multiple
      freeSolo
      aria-label="keywords"
      value={tags}
      options={[]}
      renderInput={(params) => (
        <TextField
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...params}
          placeholder={t('Enter keywords here')}
          label={t('Keywords')}
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
