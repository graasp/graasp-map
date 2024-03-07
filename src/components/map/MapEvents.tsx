import { useEffect } from 'react';
import { useMap, useMapEvents } from 'react-leaflet';

const MapEvents = ({ setBounds }: any): null => {
  const map = useMap();

  const updateBounds = () => {
    const b = map.getBounds();
    setBounds({
      lat1: b.getSouthWest().lat,
      lat2: b.getNorthEast().lat,
      lng1: b.getSouthWest().lng,
      lng2: b.getNorthEast().lng,
    });
    //   map.flyTo()
  };

  useEffect(() => {
    map.scrollWheelZoom.enable();
    map.dragging.enable();
    // I guess it works only because the transition is immediate
    // might be breaking later
    updateBounds();
  }, []);

  useMapEvents({
    zoomend: (_e) => {
      updateBounds();
    },
    dragend: (_e) => {
      updateBounds();
    },
  });

  //   const b = map.getBounds();
  //   const bounds = {
  //     lat1: b.getSouthWest().lat,
  //     lat2: b.getNorthEast().lat,
  //     lng1: b.getSouthWest().lng,
  //     lng2: b.getNorthEast().lng,
  //   };

  return null;
};

export default MapEvents;
