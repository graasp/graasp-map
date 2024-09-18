import { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import { AccountType } from '@graasp/sdk';
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
import CountryContent from './map/CountryContent';
import InitialSetup from './map/InitialSetup';
import MapContent from './map/MapContent';

type Props = QueryClientContextInterface;

const MapComponent = ({
  item,
  currentMember,
  useAddressFromGeolocation,
  useItemsInMap,
  useSuggestionsForAddress,
  useRecycleItems,
  usePostItem,
  viewItem,
  useDeleteItemGeolocation,
  useItemThumbnailUrl,
  handleAddOnClick,
  currentPosition,
  viewItemInBuilder,
}: Props): JSX.Element => {
  const [showMap, setShowMap] = useState<boolean>(false);

  useEffect(() => {
    if (currentMember?.type === AccountType.Individual) {
      i18n.changeLanguage(currentMember.extra.lang ?? DEFAULT_LANG);
    } else {
      i18n.changeLanguage(navigator.language ?? DEFAULT_LANG);
    }
  }, [currentMember]);

  return (
    <QueryClientContextProvider
      currentMember={currentMember}
      currentPosition={currentPosition}
      handleAddOnClick={handleAddOnClick}
      item={item}
      useItemThumbnailUrl={useItemThumbnailUrl}
      useAddressFromGeolocation={useAddressFromGeolocation}
      useDeleteItemGeolocation={useDeleteItemGeolocation}
      useItemsInMap={useItemsInMap}
      usePostItem={usePostItem}
      useRecycleItems={useRecycleItems}
      useSuggestionsForAddress={useSuggestionsForAddress}
      viewItem={viewItem}
      viewItemInBuilder={viewItemInBuilder}
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
          <InitialSetup
            showMap={showMap}
            setShowMap={setShowMap}
            currentPosition={currentPosition}
          />

          {!showMap && !currentPosition ? (
            <CountryContent setShowMap={setShowMap} />
          ) : (
            <MapContent currentPosition={currentPosition} />
          )}
        </MapContainer>
      </div>
    </QueryClientContextProvider>
  );
};

export default MapComponent;
