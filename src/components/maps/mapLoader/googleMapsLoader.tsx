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
  const { location, setLocation } = useLocationContext(); // Access and set location via context
  const mapRef = useRef<google.maps.Map | null>(null);
  const { configuration } = useConfiguration();
  const MapsKey = googleMapsKey || configuration?.googleApiKey;
  const toast = useRef<any>(null);

  const defaultLibraries: Libraries = ['places', 'drawing', 'geometry', 'visualization'];

  // Request geolocation and set the location in context
  const requestUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setLocation(userLocation); // Update the location in the context
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
          timeout: 10000, // Timeout after 10 seconds
          maximumAge: 0,  // Prevent using a cached position
          enableHighAccuracy: true, // Use high accuracy if available
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    // Trigger the location permission request when the component mounts
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

  // If map isn't loaded yet, render nothing (no loader)
  if (!isLoaded || !location) {
    return null; // Simply render nothing if the map isn't ready
  }

  const handleFindResturent = () => {
    alert('Find restaurant clicked');
  };

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
          <SearchLocation handleFindResturent={handleFindResturent} />
        </div>
      </GoogleMap>
    </>
  );
};

export default GoogleMapsLoader;
