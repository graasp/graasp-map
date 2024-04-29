import { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

// import { Skeleton } from '@mui/material';
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

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

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
  handleAddOnClick,
  isMobile,
}: Props): JSX.Element => {
  const [showMap, setShowMap] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hasFetchedCurrentLocation, setHasFetchedCurrentLocation] =
    useState<boolean>(false);

  const [currentPosition, setCurrentPosition] = useState<{
    lat: number;
    lng: number;
  }>();

  useEffect(() => {
    if (currentMember) {
      i18n.changeLanguage(currentMember.extra.lang ?? DEFAULT_LANG);
    }
  }, [currentMember]);

  // get current location
  useEffect(() => {
    const success = (pos: {
      coords: { latitude: number; longitude: number };
    }) => {
      const crd = pos.coords;
      setCurrentPosition({ lat: crd.latitude, lng: crd.longitude });
      setHasFetchedCurrentLocation(true);
    };

    navigator.geolocation.getCurrentPosition(
      success,
      (err: { code: number; message: string }) => {
        // eslint-disable-next-line no-console
        console.warn(`ERROR(${err.code}): ${err.message}`);
        setHasFetchedCurrentLocation(true);
      },
      options,
    );
  }, []);

  // if (!hasFetchedCurrentLocation) {
  //   return <Skeleton width="100%" height="100%" />;
  // }

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
      handleAddOnClick={handleAddOnClick}
      useDeleteItemGeolocation={useDeleteItemGeolocation}
      isMobile={isMobile}
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
