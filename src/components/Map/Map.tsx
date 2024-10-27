"use client"

import { useCallback, useRef } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { containerStyles, defaultOptions } from '@/lib/mapConfiguration';
import { useResize } from '@/hooks/useResize';
import { MapSectionProps } from '@/lib/propTypes/ContactPage/MapSectionProps';


const Map = ({
  center
}: MapSectionProps) => {
  const screen = useResize();

  const mapRef = useRef<google.maps.Map | undefined>(undefined);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_API_KEY as string
  })

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    mapRef.current = map;
  }, [])

  const onUnmount = useCallback(function callback() {
    mapRef.current = undefined;
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{
        width: '100%',
        height: containerStyles[screen],
      }}
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={defaultOptions}
    >
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <div>Skeleton...</div>
  );
}

export default Map;

// сделать скелетон