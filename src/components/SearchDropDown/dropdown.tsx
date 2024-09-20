import React, { useState, useEffect } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'tailwindcss/tailwind.css';
import { useLocationContext } from '@/context/LocationContext'; 
import Link from 'next/link';

const SearchLocation = () => {
    const [address, setAddress] = useState<string>('');
    const [coordinates, setCoordinates] = useState<{ lat: number; lng: number } | null>(null);
    const { setLocation } = useLocationContext();

    const handleSelect = async (value: string) => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAddress(value);
        setCoordinates(latLng);
        setLocation(latLng);
    };

    const getCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const latLng = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
    
                    setCoordinates(latLng);
    
                    try {
                        const results = await geocodeByAddress(`${latLng.lat},${latLng.lng}`);
                        const currentAddress = results[0].formatted_address;
                        setAddress(currentAddress);
                        setLocation(latLng);
                    } catch (error) {
                        console.error("Error reverse geocoding coordinates:", error);
                    }
                },
                (error) => {
                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            alert("Location permission denied by the user.");
                            break;
                        case error.POSITION_UNAVAILABLE:
                            alert("Location information is unavailable.");
                            break;
                        case error.TIMEOUT:
                            alert("The request to get the user's location timed out.");
                            break;
                        default:
                            alert("An unknown error occurred while fetching the location.");
                            break;
                    }
                    console.error("Geolocation error:", error);
                },
                {
                    timeout: 10000, 
                    maximumAge: 0, 
                    enableHighAccuracy: true, 
                }
            );
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };
    

    useEffect(() => {
        getCurrentLocation();
    }, []);

    return (
        <div className="absolute lg:top-[400px] top-[55%] left-0 right-0 w-full z-40 flex justify-center items-center p-4">
            <div className="flex lg:bg-black bg-[#787777] rounded-[10px] lg:h-[80px] w-full max-w-4xl p-1">
                <div className="lg:flex items-center w-full">
                    <div className="lg:w-4/5 w-full px-2 lg:mt-0 mt-5">
                        <PlacesAutocomplete
                            value={address}
                            onChange={setAddress}
                            onSelect={handleSelect}
                        >
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                <div className="relative w-full">
                                    <input
                                        {...getInputProps({
                                            placeholder: 'Enter your full address',
                                            className: 'w-full h-[60px] px-6 rounded-[10px] text-black border-none outline-none shadow-lg',
                                        })}
                                    />
                                    <div className="absolute z-10 bg-white w-full mt-2 rounded-lg shadow-lg">
                                        {loading && <div className="p-2">Loading...</div>}
                                        {suggestions.map((suggestion) => {
                                            const className = suggestion.active
                                                ? 'bg-gray-200 cursor-pointer p-2'
                                                : 'cursor-pointer p-2';
                                            return (
                                                <div
                                                    {...getSuggestionItemProps(suggestion, { className })}
                                                    key={suggestion.placeId}
                                                >
                                                    <span className="text-black">
                                                        {suggestion.description}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </PlacesAutocomplete>
                    </div>

                    <div className="lg:w-1/5 w-full px-2 lg:mt-0 mt-5 lg:mb-0 mb-5">
                        <Link href="/restaurants">
                            <Button
                                label="Find Restaurants"
                                className="p-button-success h-[60px] w-full text-lg  rounded-[30px] shadow-lg bg-[#90ea93]"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchLocation;
