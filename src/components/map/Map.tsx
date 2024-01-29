import { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import { LatLng } from 'leaflet';

import { legends } from '../../config/constants';
import { markers } from '../../data/data';
import { MarkerProps, Point } from '../../types';
import Search from '../search/Search';
import AddItemModal from './AddItemModal';
import CurrentLocationMarker from './CurrentLocationMarker';
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

  const [isItemSearchDialogOpen, setIsItemSearchDialogOpen] = useState(false);
  const [itemsList] = useState(markers);

  const [selectedItem, setSelectedItem] = useState<null | MarkerProps>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // click on pint at the map
  const [clickedPoint, setClickedPoint] = useState<Point>([]);

  useEffect(() => {
    if (selectedItem) {
      const { lat, lng } = selectedItem;
      setCenter([lat, lng]);
      // setMarkerSearch(title);
    }
  }, [selectedItem]);

  // const filteredItems = useMemo(() => {
  //   const selectedTagsSet = new Set(selectedTags);
  //   const selectedParentKeys: string[] = Object.keys(isChecked).filter(
  //     (key) => isChecked[key as keyof typeof isChecked],
  //   );

  //   return items.filter((ele) => {
  //     const { tags, parent } = ele;
  //     const hasCommonTags = selectedTagsSet.size === 0;

  //     if (
  //       selectedParentKeys.length === 0 ||
  //       selectedParentKeys.includes(parent)
  //     ) {
  //       if (
  //         hasCommonTags ||
  //         tags.some((tag: Tag) => selectedTagsSet.has(tag.name))
  //       ) {
  //         return true;
  //       }
  //     }

  //     return false;
  //   });
  // }, [ selectedTags, isChecked]);

  // useEffect(() => {
  //   // const list = filteredItems.filter(({ title }: MarkerProps) =>
  //   //   title.toLowerCase().includes(markerSearch.toLowerCase()),
  //   // );
  //   console.log('filter');
  //   // setItemsList(list);
  // }, [filteredItems, markerSearch]);

  const handleClick = (e: { latlng: LatLng }) => {
    const { lat, lng } = e.latlng;
    if (!isItemSearchDialogOpen) {
      setClickedPoint([lat, lng]);
    }
  };

  return (
    <>
      {Boolean(clickedPoint.length) && (
        <AddItemModal
          closeModal={() => setClickedPoint([])}
          location={clickedPoint}
          open={Boolean(clickedPoint.length)}
        />
      )}

      {/* {showCountryForm && <CountryForm />} */}

      <div className="map-container">
        <Search />

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
          <ItemsMarkers />

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