import * as React from 'react';
import { I18nextProvider } from 'react-i18next';

import { ThemeProvider } from '@mui/material';

import { theme } from '@graasp/ui';

// eslint-disable-next-line import/no-relative-packages
import Map from '../src/components/Map';
// eslint-disable-next-line import/no-relative-packages
import i18n from '../src/config/i18n';
import { hooks, mutations } from './queryClient';

const viewItem = (item) => {
  // eslint-disable-next-line no-console
  console.log('view item', item);
};

const App = (): JSX.Element => {
  const { data: currentMember } = hooks.useCurrentMember();
  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <Map
          itemId="6c0c2f21-8787-4ff2-a426-9a9358e1423f"
          viewItem={viewItem}
          currentMember={currentMember}
          useDeleteItemGeolocation={mutations.useDeleteItemGeolocation}
          useItemsInMap={hooks.useItemsInMap}
          useAddressFromGeolocation={hooks.useAddressFromGeolocation}
          useSuggestionsForAddress={hooks.useSuggestionsForAddress}
          usePostItem={mutations.usePostItem}
          useRecycleItems={mutations.useRecycleItems}
        />
      </I18nextProvider>
    </ThemeProvider>
  );
};

export default App;
