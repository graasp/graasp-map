import { ChangeEventHandler, useState } from 'react';

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

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.target.value);
    setSelectedAddress(undefined);
  };

  const handleChangeOption = (option: {
    display_name: string;
    lat: string;
    lon: string;
  }): void => {
    // eslint-disable-next-line camelcase
    const { display_name: addressLabel, lat, lon: lng } = option;
    onChangeOption?.({
      addressLabel,
      lat: +lat,
      lng: +lng,
    });

    setSelectedAddress(addressLabel);
    setQuery(undefined);
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <TextField
        disabled={disabled}
        fullWidth
        label="Location"
        multiline
        placeholder={t(MAP.GEOLOCATION_PICKER_PLACEHOLDER)}
        onChange={onChange}
        value={selectedAddress ?? query}
        sx={{ minWidth: 300 }}
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
            <ListItemButton
              key={r.osm_id}
              onClick={() => handleChangeOption(r)}
            >
              {r.display_name}
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
