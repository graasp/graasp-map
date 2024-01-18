import React, { useEffect, useMemo, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import { TextField } from '@mui/material';

import { LatLng } from 'leaflet';
import 'leaflet-geosearch/assets/css/leaflet.css';

import { Country, MarkerProps, Point, Tag } from '../../types';
import AddItemModal from '../addModal';
import AutoCompleteInput from '../autocomplete';
import CustomSearch from './CustomSearchMenu';
import AddSearchControlToMap from './ResearchControl';
import { countries, markers } from './data';
import { iconPerson, iconsPerParent } from './icons';
import Legend from './legend';
import './style.css';

const legends = [
  { title: 'MyItems', color: '#2A81CB' },
  { title: 'Published', color: '#2AAD27' },
];
const Map = (): JSX.Element => {
  const [items, setItems] = useState<MarkerProps[]>(markers);
  const [center, setCenter] = useState<[number, number]>([51.505, -0.09]); // Default center coordinates

  const [isItemSearchDialogOpen, setIsItemSearchDialogOpen] = useState(false);
  const [anchor, setAnchor] = useState<HTMLInputElement | null>(null);
  const [markerSearch, setMarkerSearch] = useState('');
  const [itemsList, setItemsList] = useState(markers);

  const [selectedItem, setSelectedItem] = useState<null | MarkerProps>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState({
    Accessible: true,
    Published: false,
  });
  // countries search if not able to geolocalize user
  const [showCountryForm, setShowCountryForm] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  // click on pint at the map
  const [clickedPoint, setClickedPoint] = useState<Point>([]);

  useEffect(() => {
    // Use the Geolocation API to get the user's current position
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCenter([latitude, longitude]); // Set the center to the user's current location
        },
        () => {
          setShowCountryForm(true);
        },
      );
    } else {
      setShowCountryForm(true);
    }
  }, []);

  useEffect(() => {
    if (selectedItem) {
      const { lat, lng, title } = selectedItem;
      setCenter([lat, lng]);
      setMarkerSearch(title);
    }
  }, [selectedItem]);

  useEffect(() => {
    if (selectedCountry) {
      const { latitude, longitude } = selectedCountry;
      setCenter([latitude, longitude]);
      setShowCountryForm(false);
    }
  }, [selectedCountry]);

  const filteredItems = useMemo(() => {
    const selectedTagsSet = new Set(selectedTags);
    const selectedParentKeys: string[] = Object.keys(isChecked).filter(
      (key) => isChecked[key as keyof typeof isChecked],
    );

    return items.filter((ele) => {
      const { tags, parent } = ele;
      const hasCommonTags = selectedTagsSet.size === 0;

      if (
        selectedParentKeys.length === 0 ||
        selectedParentKeys.includes(parent)
      ) {
        if (
          hasCommonTags ||
          tags.some((tag: Tag) => selectedTagsSet.has(tag.name))
        ) {
          return true;
        }
      }

      return false;
    });
  }, [items, selectedTags, isChecked]);

  useEffect(() => {
    const list = filteredItems.filter(({ title }: MarkerProps) =>
      title.toLowerCase().includes(markerSearch.toLowerCase()),
    );
    setItemsList(list);
  }, [filteredItems, markerSearch]);

  const handleClick = (e: { latlng: LatLng }) => {
    const { lat, lng } = e.latlng;
    if (!isItemSearchDialogOpen) {
      setClickedPoint([lat, lng]);
    }
  };

  const submitNewItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { title, description }: any = Object.fromEntries(formData);
    if (clickedPoint.length && title && description) {
      setItems([
        ...items,
        {
          lat: clickedPoint[0],
          lng: clickedPoint[1],
          title,
          description,
          parent: 'MyItems',
          tags: [],
        },
      ]);
      setClickedPoint([]);
    }
  };

  const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    setIsItemSearchDialogOpen(true);
    setAnchor(e.currentTarget);
  };

  const handleDialogClose = () => {
    setIsItemSearchDialogOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMarkerSearch(e.target.value);
  };

  return (
    <>
      {clickedPoint.length === 2 && (
        <AddItemModal
          handleSubmit={submitNewItem}
          closeModal={() => setClickedPoint([])}
          clickedPoint={clickedPoint}
          open={Boolean(clickedPoint.length)}
        />
      )}

      {showCountryForm && (
        <div className="p-absolute abs-center top-30">
          <AutoCompleteInput
            items={countries}
            label="Country"
            value={selectedCountry}
            setValue={setSelectedCountry}
          />
        </div>
      )}

      <div className="map-container">
        {!showCountryForm && (
          <form className="custom-search-input">
            <TextField
              placeholder="Search About an Item"
              variant="outlined"
              onClick={handleInputClick}
              value={markerSearch}
              onChange={handleInputChange}
              sx={{ background: 'white' }}
            />
            {isItemSearchDialogOpen && (
              <CustomSearch
                isItemSearchDialogOpen={isItemSearchDialogOpen}
                itemsList={itemsList}
                setSelectedItem={setSelectedItem}
                closeMenu={handleDialogClose}
                selectedTags={selectedTags}
                isChecked={isChecked as any}
                setIsChecked={setIsChecked as any}
                setSelectedTags={setSelectedTags}
                anchorEl={anchor}
              />
            )}
          </form>
        )}

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
          <Marker icon={iconPerson} position={center}>
            <Popup>Current location</Popup>
          </Marker>
          {filteredItems.map(
            ({ lat, lng, title, description, parent }: MarkerProps) => (
              <Marker icon={iconsPerParent[parent]} position={[lat, lng]}>
                <Popup>
                  {title} <br /> {description}
                </Popup>
              </Marker>
            ),
          )}

          <AddSearchControlToMap
            onClick={handleClick}
            lat={center[0]}
            lng={center[1]}
          />
        </MapContainer>
        <Legend legends={legends} />
      </div>
    </>
  );
};

export default Map;
