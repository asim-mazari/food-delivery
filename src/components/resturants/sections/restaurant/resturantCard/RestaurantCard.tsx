import React, { useState } from 'react';

interface Props {
  restaurant?: any;
}

const RestaurantCard: React.FC<Props> = ({ restaurant }) => {
  const [bgColor, setBgColor] = useState('#f0f0f0');

  return (
    <div className={`rounded-lg shadow-lg overflow-hidden w-[200px] lg:mt-[0px] mt-[20px] cursor-pointer`} style={{ backgroundColor: bgColor }}>
      <div className="relative">
        <div className="p-[5px] group">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-32 object-cover rounded-[10px] transform transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="absolute top-2 left-2 bg-white text-black text-xs font-bold rounded-full px-2 py-1">
          {restaurant.deliveryTime} MIN
        </div>
        <div className="absolute top-2 right-2 bg-white text-black rounded-full p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0l.172.172.172-.172a4 4 0 015.656 0 4 4 0 010 5.656L10 15.414l-5.828-5.828a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold text-black truncate">{restaurant.name}</h3>
        <div className="text-sm text-gray-600">
          ⭐ {restaurant.reviewData.ratings}/5 ({restaurant.reviewData.total})
        </div>
        <div className="text-sm text-gray-500 truncate">
          {restaurant.categories
            .map((category: { title: any }) => category.title)
            .join(', ')}
        </div>
        <div className="mt-2 text-green-700 font-semibold">Rs {restaurant.minimumOrder} Minimum</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
