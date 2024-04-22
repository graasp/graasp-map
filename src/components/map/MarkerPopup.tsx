import { Popup } from 'react-leaflet';

import { Box, Chip, Stack, Typography } from '@mui/material';

import {
  ItemGeolocation,
  PermissionLevel,
  PermissionLevelCompare,
} from '@graasp/sdk';

import DeleteItemButton from './DeleteItemButton';
import DeleteLocationButton from './DeleteLocationButton';
import ViewButton from './ViewButton';

const MarkerPopup = ({
  geolocation,
}: {
  geolocation: ItemGeolocation;
}): JSX.Element => {
  const { item } = geolocation;

  return (
    <Popup autoPan={false}>
      <Typography variant="h5">{item.name}</Typography>
      {/* TODO: slice and show html  */}
      {item.description && (
        <Typography
          component="p"
          dangerouslySetInnerHTML={{ __html: item.description }}
        />
      )}
      <Typography variant="caption">
        {geolocation.addressLabel}
        <br />
        {geolocation.helperLabel}
      </Typography>
      <Box>
        {item.settings.tags?.map((t: string, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <Chip key={idx} label={t} sx={{ mx: 0.5 }} />
        ))}
      </Box>
      <Stack direction="row">
        <ViewButton item={item} />
        {item?.permission &&
          PermissionLevelCompare.gte(
            item.permission,
            PermissionLevel.Admin,
          ) && (
            <>
              <DeleteLocationButton item={item} />
              <DeleteItemButton item={item} />
            </>
          )}
      </Stack>
    </Popup>
  );
};

export default MarkerPopup;
