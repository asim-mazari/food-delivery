// src/context/LocationContext.tsx

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LocationContextProps {
  location: google.maps.LatLngLiteral | null; // The location is now a LatLngLiteral object
  setLocation: React.Dispatch<React.SetStateAction<google.maps.LatLngLiteral | null>>;
}

const LocationContext = createContext<LocationContextProps | undefined>(undefined);

interface LocationProviderProps {
  children: ReactNode;
}

export const LocationProvider = ({ children }: LocationProviderProps) => {
  const [location, setLocation] = useState<google.maps.LatLngLiteral | null>(null);

  useEffect(() => {
    const storedLocation = localStorage.getItem('location');
    if (storedLocation) {
      setLocation(JSON.parse(storedLocation));
    }
  }, []);

  useEffect(() => {
    if (location) {
      localStorage.setItem('location', JSON.stringify(location));
    }
  }, [location]);

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationContext = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocationContext must be used within a LocationProvider');
  }
  return context;
};
