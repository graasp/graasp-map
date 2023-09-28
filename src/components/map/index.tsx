/* eslint-disable no-restricted-syntax */

/* eslint-disable import/no-extraneous-dependencies */

/* eslint-disable react/no-unused-prop-types */
import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import L from 'leaflet';
import 'leaflet-geosearch/assets/css/leaflet.css';

import markerPinPerson from '../../location.svg';
import AddItemModal from '../addModal';
import DropDown from '../dropdown';
import CustomSearch from './CustomSearchMenu';
import AddSearchControlToMap from './ResearchControl';
import { countries, markers } from './data';
import './style.css';

const iconPerson = new L.Icon({
  iconUrl: markerPinPerson,
  iconSize: new L.Point(30, 30),
  className: 'leaflet-div-icon',
});

export { iconPerson };
type Props = {
  name: string;
};

interface MarkerProps {
  lat: number;
  lng: number;
  title: string;
  description: string;
}

const Map = (): JSX.Element => {
  const [items, setItems] = useState<any>(markers);
  const [center, setCenter] = useState<[number, number]>([51.505, -0.09]); // Default center coordinates
  const [dropdownState, setDropdownState] = useState(false);
  const [markerSearch, setMarkerSearch] = useState('');
  const [itemsList, setItemsList] = useState(markers);
  const [selectedItem, setSelectedItem] = useState<null | MarkerProps>(null);
  const [selectedTags, setSelectedTags] = useState<null | MarkerProps>([]);
  const [isChecked, setIsChecked] = useState({
    Own: false,
    Shared: false,
    Published: false,
  });
  // countries search if not able to geolocalize user
  const [showCountryForm, setShowCountryForm] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [isCountryMenuOpen, setIsCountryMenuOpen] = useState<boolean>(false);
  const [countrySearch, setCountrySearch] = useState('');

  // click on pint at the map
  const [clickedPoint, setClickedPoint] = useState([]);

  const countrySearchHandler = (e: any) => {
    setIsCountryMenuOpen(true);
    setCountrySearch(e.target.value);
  };

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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setDropdownState(!dropdownState);
  };

  const markerSearchHandler = (e: any) => {
    setDropdownState(true);
    setMarkerSearch(e.target.value);
  };

  useEffect(() => {
    const list = items.filter(({ title }: MarkerProps) =>
      title.toLowerCase().includes(markerSearch.toLowerCase()),
    );
    setItemsList(list);
  }, [markerSearch]);

  useEffect(() => {
    if (selectedItem) {
      const { lat, lng, title } = selectedItem;
      setCenter([lat, lng]);
      setMarkerSearch(title);
    }
  }, [selectedItem]);

  useEffect(() => {
    if (selectedCountry) {
      const { latitude, longitude, title } = selectedCountry;
      setCenter([latitude, longitude]);
      setCountrySearch(title);
      setShowCountryForm(false);
    }
  }, [selectedCountry]);

  // const set1 = new Set(selectedTags.map((item) => item.name));
  // const count = Object.values(isChecked).filter(Boolean).length;
  //
  // console.log(
  //   markers.filter((ele: ele) => {
  //     const { tags, parent } = ele;
  //     const set2 = new Set(tags.map((item: any) => item.name));
  //     let hasCommonElements = false;

  //     if (set1.size) {
  //       // Iterate through set1 and check if each element exists in set2
  //       for (const element of set1) {
  //         if (set2.has(element)) {
  //           hasCommonElements = true;
  //           break; // Exit the loop as soon as a common element is found
  //         }
  //       }
  //     } else {
  //       hasCommonElements = true;
  //     }
  //     return (count ? isChecked[parent] : true) && hasCommonElements;
  //   }),
  //   'common',
  // );

  const toggleTag = (tag: any) => {
    setSelectedTags((prev: any) => {
      const isFound = prev.find((ele: any) => ele.name === tag.name);
      if (isFound) {
        return prev.filter((ele: any) => ele.name !== tag.name);
      }
      return [...prev, tag];
    });
  };

  const handleClick = (e: any) => {
    const { lat, lng } = e.latlng;
    setClickedPoint([lat, lng]);
  };

  const submitNewItem = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { title, description } = Object.fromEntries(formData);
    setItems([
      ...items,
      { lat: clickedPoint[0], lng: clickedPoint[1], title, description },
    ]);
    setClickedPoint([]);
  };
  return (
    <>
      {clickedPoint.length === 2 && (
        <AddItemModal
          handleSubmit={submitNewItem}
          closeModal={() => setClickedPoint([])}
          clickedPoint={clickedPoint}
        />
      )}
      {showCountryForm && (
        <form className="custom-search-input country-form">
          <input
            name="country-search"
            value={countrySearch}
            onChange={countrySearchHandler}
            placeholder="Search About Country"
          />
          <div
            className={`text-start dropdown-items ${
              isCountryMenuOpen ? 'isVisible' : 'isHidden'
            }`}
          >
            <DropDown
              dropdownState={isCountryMenuOpen}
              itemsList={countries.filter((ele) =>
                ele.title.includes(countrySearch),
              )}
              setSelectedItem={setSelectedCountry}
              closeMenu={() => setIsCountryMenuOpen(false)}
            />
          </div>
        </form>
      )}

      <div className="map-container">
        {!showCountryForm && (
          <form className="custom-search-input">
            <input
              name="marker-search"
              value={markerSearch}
              onChange={markerSearchHandler}
              placeholder="Search About an Item"
            />
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
            <CustomSearch
              dropdownState={dropdownState}
              itemsList={itemsList}
              setSelectedItem={setSelectedItem}
              closeMenu={() => setDropdownState(false)}
              toggleTag={toggleTag}
              selectedTags={selectedTags}
              isChecked={isChecked}
              setIsChecked={setIsChecked}
            />
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
          {items.map(({ lat, lng, title, description }: MarkerProps) => (
            <Marker position={[lat, lng]}>
              <Popup>
                {' '}
                {title} <br /> {description}
              </Popup>
            </Marker>
          ))}

          <AddSearchControlToMap
            onClick={handleClick}
            lat={center[0]}
            lng={center[1]}
          />
        </MapContainer>
      </div>
    </>
  );
};

export default Map;
