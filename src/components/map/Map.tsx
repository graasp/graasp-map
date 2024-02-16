import { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import { ItemGeolocation } from '@graasp/sdk';
import { DEFAULT_LANG } from '@graasp/translations';

import { LatLng } from 'leaflet';

import { legends } from '../../config/constants';
import i18n from '../../config/i18n';
import { hooks } from '../../config/queryClient';
import { MarkerProps } from '../../types';
import Search from '../search/Search';
import CurrentLocationMarker from './CurrentLocationMarker';
import CurrentMarker from './CurrentMarker';
import GeographicSearch from './GeographicSearch';
import ItemsMarkers from './ItemsMarkers';
import Legends from './Legends';

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

const Map = (): JSX.Element => {
  const [center, setCenter] = useState<[number, number]>([51.505, -0.09]); // Default center coordinates
  const { data: currentMember } = hooks.useCurrentMember();
  const [isItemSearchDialogOpen] = useState(false);

  const [selectedItem] = useState<null | MarkerProps>(null);
  const [tags, setTags] = useState<string[]>([]);

  // click on pint at the map
  const [clickedPoint, setClickedPoint] =
    useState<Pick<ItemGeolocation, 'lat' | 'lng'>>();

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

  const handleClick = (e: { latlng: LatLng }) => {
    const { lat, lng } = e.latlng;
    console.error(e);
    if (!isItemSearchDialogOpen) {
      setClickedPoint({ lat, lng });
    }
  };

  const onChangeTags = (newTags: any) => {
    setTags(newTags);
  };

  return (
    <>
      {/* {showCountryForm && <CountryForm />} */}

      <div className="map-container">
        <Search onChange={onChangeTags} />

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
          <CurrentLocationMarker />
          <ItemsMarkers tags={tags} />

          {clickedPoint && <CurrentMarker point={clickedPoint} />}

          <GeographicSearch
            onClick={handleClick}
            lat={center[0]}
            lng={center[1]}
          />
        </MapContainer>
        <Legends legends={legends} />
      </div>
    </>
  );
};

export default Map;
