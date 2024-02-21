import { I18nextProvider } from 'react-i18next';

import { ThemeProvider } from '@mui/material';

import { ItemGeolocation } from '@graasp/sdk';
import { theme } from '@graasp/ui';

import Map from '../src/components/Map';
import type { AddressResult } from '../src/components/map/CurrentMarker';
import i18n from '../src/config/i18n';
import { axios, hooks, mutations } from './queryClient';

const getAddressFromLatLng = (point: Pick<ItemGeolocation, 'lat' | 'lng'>) =>
  axios.get<AddressResult>(
    `https://nominatim.openstreetmap.org/reverse?lat=${point.lat}&lon=${point.lng}&format=jsonv2`,
    {
      responseType: 'json',
    },
  );

const viewItem = (item) => {
  console.log('view item', item);
};

const App = (): JSX.Element => {
  const { data: currentMember } = hooks.useCurrentMember();

  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <Map
          viewItem={viewItem}
          currentMember={currentMember}
          deleteLocation={mutations.useDeleteItemGeolocation().mutate}
          useItemsInMap={hooks.useItemsInMap}
          useAddressFromGeolocation={hooks.useAddressFromGeolocation}
          getAddressFromLatLng={getAddressFromLatLng}
          postItem={mutations.usePostItem().mutate}
          recycleItems={mutations.useRecycleItems().mutate}
        />
      </I18nextProvider>
    </ThemeProvider>
  );
};

export default App;
