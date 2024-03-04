import { ChangeEventHandler, useEffect, useState } from 'react';

import {
  Box,
  LinearProgress,
  List,
  ListItemButton,
  TextField,
} from '@mui/material';

import { DEFAULT_LANG } from '@graasp/translations';

import i18n, { useMapTranslation } from '../../config/i18n';
import { MAP } from '../../langs/constants';
import { QueryClientContextInterface } from '../context/QueryClientContext';

export type GeolocationPickerProps = {
  disabled?: boolean;
  useSuggestionsForAddress: QueryClientContextInterface['useSuggestionsForAddress'];
  onChangeOption?: (args: {
    addressLabel: string;
    lat: number;
    lng: number;
  }) => void;
  invisible?: boolean;
  initialValue?: string;
  endAdornment?: JSX.Element;
};

const GeolocationPicker = ({
  disabled = false,
  onChangeOption,
  useSuggestionsForAddress,
  invisible = false,
  initialValue = '',
}: GeolocationPickerProps): JSX.Element => {
  const { t } = useMapTranslation();

  const [query, setQuery] = useState<string | undefined>(initialValue);
  const [selectedAddress, setSelectedAddress] = useState<string | undefined>();
  const { data: suggestions, isFetching } = useSuggestionsForAddress({
    address: query !== initialValue ? query : undefined,
    lang: i18n.language ?? DEFAULT_LANG,
  });

  useEffect(() => {
    if (initialValue !== query) {
      setQuery(initialValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValue]);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.target.value);
    setSelectedAddress(undefined);
  };

  const handleChangeOption = (option: {
    addressLabel: string;
    lat: number;
    lng: number;
  }): void => {
    onChangeOption?.(option);

    setSelectedAddress(option.addressLabel);
    setQuery(undefined);
  };

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <TextField
        disabled={disabled}
        fullWidth
        label="Location"
        multiline
        placeholder={t(MAP.GEOLOCATION_PICKER_PLACEHOLDER)}
        onChange={onChange}
        value={selectedAddress ?? query}
        sx={{ minWidth: 250 }}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...(invisible
          ? {
              variant: 'standard',
              InputLabelProps: {
                shrink: true,
              },
              InputProps: {
                disableUnderline: true,
              },
            }
          : {})}
      />
      {isFetching && query && (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      )}

      {suggestions && !selectedAddress && (
        <List
          sx={{
            position: 'absolute',
            background: 'white',
            top: 70,
            width: '100%',
          }}
        >
          {suggestions.map((r) => (
            <ListItemButton key={r.id} onClick={() => handleChangeOption(r)}>
              {r.addressLabel}
            </ListItemButton>
          ))}
          {!suggestions.length &&
            query &&
            !isFetching &&
            t(MAP.GEOLOCATION_PICKER_NO_ADDRESS)}
        </List>
      )}
    </Box>
  );
};

export default GeolocationPicker;
