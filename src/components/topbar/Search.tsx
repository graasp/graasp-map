import { Autocomplete, TextField } from '@mui/material';

import { useMapTranslation } from '../../config/i18n';
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
  const { t } = useMapTranslation();

  const onChangeTags = (_e: unknown, newValue: string[]) => {
    onChange(newValue);
  };

  return (
    <Autocomplete
      multiple
      freeSolo
      aria-label={t('Keywords')}
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
