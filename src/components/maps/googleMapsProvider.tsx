import React, { useEffect, useRef, useState } from 'react';
import { useConfiguration } from '@/context/ConfigurationContext';
import GoogleMapsLoader from './mapLoader/googleMapsLoader';
import { ProgressSpinner } from 'primereact/progressspinner';

interface GoogleMapsLoaderProps {
  children: React.ReactNode;
}

const GoogleMapsProvider: React.FC<GoogleMapsLoaderProps> = ({ children}) => {

  const { configuration } = useConfiguration();
  const MapsKey = configuration?.googleApiKey;

  if (!MapsKey) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <ProgressSpinner />
      </div>
    );
  }


  return (
    <>
      <GoogleMapsLoader googleMapsKey={MapsKey}></GoogleMapsLoader>
      {children}
    </>
  );
};

export default GoogleMapsProvider;
