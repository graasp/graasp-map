import { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import { DEFAULT_LANG } from '@graasp/translations';

import 'leaflet-easybutton/src/easy-button.css';
import 'leaflet-geosearch/assets/css/leaflet.css';
import 'leaflet/dist/leaflet.css';

import i18n from '../config/i18n';
import LoggedOutWarning from './common/LoggedOutWarning';
import {
  QueryClientContextInterface,
  QueryClientContextProvider,
} from './context/QueryClientContext';
import CountryForm from './map/CountryForm';
import InitialSetup from './map/InitialSetup';
import MapContent from './map/MapContent';

type Props = QueryClientContextInterface;

const Map = ({
  itemId,
  currentMember,
  useAddressFromGeolocation,
  useItemsInMap,
  useSuggestionsForAddress,
  useRecycleItems,
  usePostItem,
  viewItem,
  useDeleteItemGeolocation,
}: Props): JSX.Element => {
  const [showMap, setShowMap] = useState<boolean>(false);

  useEffect(() => {
    if (currentMember) {
      i18n.changeLanguage(currentMember.extra.lang ?? DEFAULT_LANG);
    }
  }, [currentMember]);

  return (
    <QueryClientContextProvider
      itemId={itemId}
      useSuggestionsForAddress={useSuggestionsForAddress}
      currentMember={currentMember}
      useAddressFromGeolocation={useAddressFromGeolocation}
      useItemsInMap={useItemsInMap}
      useRecycleItems={useRecycleItems}
      usePostItem={usePostItem}
      viewItem={viewItem}
      useDeleteItemGeolocation={useDeleteItemGeolocation}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
      >
        {/* the properties set here are the initial ones */}
        <MapContainer
          // default to switzerland
          center={[47, 8]}
          zoom={4}
          dragging={false}
          scrollWheelZoom={false}
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <LoggedOutWarning />

          {/* focus on initial geoloc if item id is defined, cannot use useffect because of map updates */}
          <InitialSetup showMap={showMap} setShowMap={setShowMap} />

          {!showMap ? <CountryForm setShowMap={setShowMap} /> : <MapContent />}
        </MapContainer>
      </div>
    </QueryClientContextProvider>
  );
};

export default Map;
