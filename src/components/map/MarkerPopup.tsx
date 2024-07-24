import { Popup } from 'react-leaflet';

import { Box, Chip, Link, Stack, Tooltip, Typography } from '@mui/material';

import {
  ItemGeolocation,
  PermissionLevel,
  PermissionLevelCompare,
  ThumbnailSize,
} from '@graasp/sdk';

import { useMapTranslation } from '../../config/i18n';
import { useQueryClientContext } from '../context/QueryClientContext';
import DeleteItemButton from './DeleteItemButton';
import DeleteLocationButton from './DeleteLocationButton';
import ViewButton from './ViewButton';

const MarkerPopup = ({
  geolocation,
}: {
  geolocation: ItemGeolocation;
}): JSX.Element => {
  const { item } = geolocation;
  const { viewItemInBuilder, useItemThumbnailUrl } = useQueryClientContext();
  const { t } = useMapTranslation();
  const { data: thumbnailUrl } = useItemThumbnailUrl({
    item: geolocation.item,
    size: ThumbnailSize.Small,
  });

  return (
    <Popup autoPan={false}>
      <Stack direction="row" gap={1} alignItems="center" mt={1}>
        {thumbnailUrl && (
          <img alt={item.name} src={thumbnailUrl} width={30} height={30} />
        )}
        <Tooltip title={t('VIEW_ITEM_BUILDER_TOOLTIP')}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link
            component={Typography}
            onClick={() => viewItemInBuilder(item)}
            variant="h5"
            sx={{
              margin: '0 !important',
              '&:hover': {
                cursor: 'pointer',
              },
            }}
          >
            {item.name}
          </Link>
        </Tooltip>
      </Stack>
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
        {item.settings.tags?.map((tag: string, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <Chip key={idx} label={tag} sx={{ mx: 0.5 }} />
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
