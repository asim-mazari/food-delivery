"use client"
import { restaurantList } from '@/apollo/server';
import { gql, useQuery } from '@apollo/client';
import React from 'react'
import { useLocationContext } from '@/context/LocationContext';
import Sections from '@/components/resturants/sections/sections';
import AllRestaurants from '@/components/resturants/allResturants/allRestaurants';
import { ProgressSpinner } from 'primereact/progressspinner';

function page() {
  const { location } = useLocationContext(); 
  const RESTAURANTS = gql`
  ${restaurantList}
`;

  const { data, loading, error } = useQuery(RESTAURANTS, {
    variables: {
      longitude: location?.lng || null,
      latitude: location?.lat || null,
      ip: null,
    },
    fetchPolicy: "network-only",
    skip: !location,
  });

  const { restaurants, sections } = data?.nearByRestaurants ?? {
    restaurants: [],
    sections: [],
  };
  const restaurantSections = sections.map((sec:any) => ({
    ...sec,
    restaurants: sec.restaurants
      .map((id:any) => restaurants.filter((res:any) => res._id === id))
      .flat(),
  }));
  console.log("RESTAURANTS",restaurants)
  if (loading) {
    return (
      <div className="flex items-center justify-center h-20 w-full mt-[30px] mb-[30px]">
        <ProgressSpinner />
      </div>
    );
  }
  return (
    <div>
      <Sections sections={restaurantSections}></Sections>
      <AllRestaurants allRestaurants={restaurants}></AllRestaurants>
    </div>
  )
}

export default page