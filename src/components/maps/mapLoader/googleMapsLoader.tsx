import React, { useEffect, useRef, useState } from 'react';
import { GoogleMap, useJsApiLoader, Libraries } from '@react-google-maps/api';
import { useConfiguration } from '@/context/ConfigurationContext';
import { Toast } from 'primereact/toast';
import mapStyles from '../mapStyle/MapStyles';
import SearchLocation from '../../SearchDropDown/dropdown';
import { useLocationContext } from '@/context/LocationContext';

interface GoogleMapsLoaderProps {
  googleMapsKey?: string;
}

const GoogleMapsLoader: React.FC<GoogleMapsLoaderProps> = ({ googleMapsKey }) => {
  const { location, setLocation } = useLocationContext();
  const mapRef = useRef<google.maps.Map | null>(null);
  const { configuration } = useConfiguration();
  const MapsKey = googleMapsKey || configuration?.googleApiKey;
  const toast = useRef<any>(null);

  const defaultLibraries: Libraries = ['places', 'drawing', 'geometry', 'visualization'];

 
  const requestUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setLocation(userLocation);
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              alert('Location permission denied by the user.');
              break;
            case error.POSITION_UNAVAILABLE:
              alert('Location information is unavailable.');
              break;
            case error.TIMEOUT:
              alert('The request to get the user\'s location timed out.');
              break;
            default:
              alert('An unknown error occurred while fetching the location.');
              break;
          }
        },
        {
          timeout: 10000,
          maximumAge: 0,
          enableHighAccuracy: true,
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    requestUserLocation();
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: MapsKey ?? '',
    libraries: defaultLibraries,
  });

  const onLoad = (map: google.maps.Map) => {
    mapRef.current = map;
  };

  const onUnmount = () => {
    mapRef.current = null;
  };

  if (!isLoaded || !location) {
    return null;
  }

  return (
    <>
      <Toast ref={toast} position="top-right" />
      <GoogleMap
        mapContainerStyle={{
          width: '100%',
          height: '100vh',
        }}
        center={location || { lat: 0, lng: 0 }} // Use coordinates from context
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          mapTypeControl: true,
          fullscreenControl: true,
          streetViewControl: true,
          styles: mapStyles,
        }}
      >
        <div>
          <SearchLocation />
        </div>
      </GoogleMap>
    </>
  );
};

export default GoogleMapsLoader;
