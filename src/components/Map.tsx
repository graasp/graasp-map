import { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import { Alert } from '@mui/material';

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
import MapContent from './map/MapContent';

type Props = QueryClientContextInterface;

const Map = ({
  itemId,
  currentMember,
  useAddressFromGeolocation,
  useItemsInMap,
  useSuggestionsForAddress,
  useItemGeolocation,
  useRecycleItems,
  usePostItem,
  viewItem,
  useDeleteItemGeolocation,
}: Props): JSX.Element => {
  const [center, setCenter] = useState<{ lat: number; lng: number } | null>(
    null,
  );

  useEffect(() => {
    if (currentMember) {
      i18n.changeLanguage(currentMember.extra.lang ?? DEFAULT_LANG);
    }
  }, [currentMember]);

  return (
    <>
      {/* {showCountryForm && <CountryForm />} */}
      <QueryClientContextProvider
        itemId={itemId}
        useSuggestionsForAddress={useSuggestionsForAddress}
        currentMember={currentMember}
        useItemGeolocation={useItemGeolocation}
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
          {/* {!itemId && (
            <>
              <CountryForm setCenter={setCenter} />
              <MapContainer
                // default to switzerland
                center={[47, 8]}
                zoom={8}
                //   scrollWheelZoom={false}
                style={{ width: '100%', height: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
              </MapContainer>
            </>
          )} */}

          {/* the properties set here are the initial ones */}
          <MapContainer
            // default to switzerland
            center={center ? [center.lat, center.lng] : [47, 8]}
            zoom={8}
            dragging={false}
            scrollWheelZoom={false}
            style={{ width: '100%', height: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <LoggedOutWarning />

            {!center ? (
              <CountryForm setCenter={setCenter} />
            ) : (
              <MapContent initialCenter={center} />
            )}

            {/* <GeographicSearch
              onClick={handleClick}
              lat={center[0]}
              lng={center[1]}
            /> */}
          </MapContainer>
          {/* )} */}
          {/* <Legends legends={legends} /> */}
        </div>
      </QueryClientContextProvider>
    </>
  );
};

export default Map;
