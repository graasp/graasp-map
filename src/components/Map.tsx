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
import CountryContent from './map/CountryContent';
import InitialSetup from './map/InitialSetup';
import MapContent from './map/MapContent';

type Props = QueryClientContextInterface;

const Map = ({
  item,
  currentMember,
  useAddressFromGeolocation,
  useItemsInMap,
  useSuggestionsForAddress,
  useRecycleItems,
  usePostItem,
  viewItem,
  useDeleteItemGeolocation,
  handleAddOnClick,
  currentPosition,
  lang,
}: Props): JSX.Element => {
  const [showMap, setShowMap] = useState<boolean>(false);

  useEffect(() => {
    if (currentMember) {
      i18n.changeLanguage(lang ?? currentMember.extra.lang ?? DEFAULT_LANG);
    }
  }, [currentMember, lang]);

  return (
    <QueryClientContextProvider
      item={item}
      useSuggestionsForAddress={useSuggestionsForAddress}
      currentMember={currentMember}
      useAddressFromGeolocation={useAddressFromGeolocation}
      useItemsInMap={useItemsInMap}
      useRecycleItems={useRecycleItems}
      usePostItem={usePostItem}
      viewItem={viewItem}
      handleAddOnClick={handleAddOnClick}
      useDeleteItemGeolocation={useDeleteItemGeolocation}
      currentPosition={currentPosition}
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

export default Map;
