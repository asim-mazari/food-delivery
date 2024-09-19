import React from 'react';
import AllRestaurantCard from './Card/allRestaurantCard';
import { RestaurantsImage } from '@/assets';

interface Props {
  allRestaurants?: any;
}

const AllRestaurants: React.FC<Props> = ({ allRestaurants }) => {
  return (
    <div className='bg-[#f0f0f0] w-full pb-[20px] pt-[20px] pl-[5%] pr-[5%]'>
      <div className="my-8">
        <h2 className="text-3xl font-bold text-gray-900">All Restaurants</h2>
      </div>

      {/* Grid layout for the restaurants */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allRestaurants.map((restaurant: any, index: number) => (
          <AllRestaurantCard key={index} restaurant={restaurant} width='30%' />
        ))}
      </div>
    </div>
  );
};

export default AllRestaurants;
