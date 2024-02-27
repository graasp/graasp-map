import { useEffect } from 'react';
import { useMap, useMapEvents } from 'react-leaflet';

import { Autocomplete, TextField } from '@mui/material';

import { LatLng } from 'leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

export const provider = new OpenStreetMapProvider();

type Props = {
  lat: number;
  lng: number;
  onClick: (e: { latlng: LatLng }) => void;
};

const GeographicSearch = (): null => {
  const map = useMap();
  // const searchControl = new GeoSearchControl({
  //   provider,
  // });
  // searchControl.

  provider.search({ query: 'geneve' }).then((d) => {
    console.log(d);
  });
  // useMapEvents({
  //   click: onClick,
  // });

  // useEffect(() => {
  //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //   // @ts-ignore
  //   const searchControl = new GeoSearchControl({
  //     provider,
  //   });
  //   map.addControl(searchControl);
  //   return () => {
  //     map.removeControl(searchControl);
  //   };
  // }, [map]);

  // useEffect(() => {
  //   map.flyTo({ lat, lng }, 10);
  // }, [lat, lng, map]);

  return (
    <form>
      <Autocomplete
        options={[]}
        // getOptionLabel={(option) => option.title}
        freeSolo
        renderInput={(params) => (
          <TextField
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...params}
            placeholder="Search here..."
            variant="outlined"
            label="Location"
            sx={{ width: 300 }}
          />
        )}
        // onChange={onChangeTags}
      />
    </form>
  );
};

export default GeographicSearch;
