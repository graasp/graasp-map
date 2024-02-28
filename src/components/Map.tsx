import { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import { DEFAULT_LANG } from '@graasp/translations';

import 'leaflet-easybutton/src/easy-button.css';
import 'leaflet-geosearch/assets/css/leaflet.css';
import 'leaflet/dist/leaflet.css';

// import { legends } from '../config/constants';
import i18n from '../config/i18n';
import { MarkerProps } from '../types';
import {
  QueryClientContextInterface,
  QueryClientContextProvider,
} from './context/QueryClientContext';
import CurrentLocationMarker from './map/CurrentLocationMarker';
import CurrentMarker from './map/CurrentMarker';
import ItemsMarkers from './map/ItemsMarkers';
// import Legends from './map/Legends';
import TopBar from './topbar/TopBar';

// const Component = () => {
//   const map = useMap();

//   useMapEvents({
//     click: () => {
//       map.locate();
//     },
//     locationfound: (location) => {
//       console.log('location found:', location);
//     },
//     dragend: (e) => {
//       console.log(e);
//       console.log('map center:', map.getBounds());
//     },
//   });

//   return null;
// };

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
  geolocationKey,
}: Props): JSX.Element => {
  const [center, setCenter] = useState<[number, number]>([51.505, -0.09]); // Default center coordinates

  const [selectedItem] = useState<null | MarkerProps>(null);
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    if (selectedItem) {
      const { lat, lng } = selectedItem;
      setCenter([lat, lng]);
      // setMarkerSearch(title);
    }
  }, [selectedItem]);

  useEffect(() => {
    if (currentMember) {
      i18n.changeLanguage(currentMember.extra.lang ?? DEFAULT_LANG);
    }
  }, [currentMember]);

  const onChangeTags = (newTags: any) => {
    setTags(newTags);
  };
  return (
    <>
      {/* {showCountryForm && <CountryForm />} */}
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
        geolocationKey={geolocationKey}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
          }}
        >
          <MapContainer
            center={center}
            zoom={8}
            //   scrollWheelZoom={false}
            style={{ width: '100%', height: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <TopBar onChange={onChangeTags} />
            <CurrentLocationMarker />
            <ItemsMarkers tags={tags} itemId={itemId} />

            <CurrentMarker />

            {/* <GeographicSearch
              onClick={handleClick}
              lat={center[0]}
              lng={center[1]}
            /> */}
          </MapContainer>
          {/* <Legends legends={legends} /> */}
        </div>
      </QueryClientContextProvider>
    </>
  );
};

export default Map;
