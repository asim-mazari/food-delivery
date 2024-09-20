import React from 'react';
import { Carousel } from 'primereact/carousel'; // Import the Carousel component
import RestaurantCard from './resturantCard/RestaurantCard';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';
import 'tailwindcss/tailwind.css';

interface Props {
  Restaurants?: any;
}

const Restaurants: React.FC<Props> = ({ Restaurants }) => {
  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const itemTemplate = (restaurant: any) => {
    return (
      <div className="p-2">
        <RestaurantCard restaurant={restaurant} />
      </div>
    );
  };

  return (
    <div className="w-full max-w-[100vw] overflow-hidden">
      {Restaurants.length > 5 ? (
        <Carousel
          value={Restaurants}
          numVisible={5}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          itemTemplate={itemTemplate}
          circular 
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 pl-[30px] ">
          {Restaurants.map((restaurant: any, index: number) => (
            <div key={index} className="p-2">
              <RestaurantCard restaurant={restaurant} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Restaurants;
