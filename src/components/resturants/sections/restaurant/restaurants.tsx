import React from 'react'
import RestaurantCard from './resturantCard/RestaurantCard'

interface Props{
    Restaurants?:any
}

const Restaurants:React.FC<Props> = ({Restaurants})=> {
  return (
    <div className='lg:flex wrap gap-[20px] pb-[20px]'>
      {Restaurants.map((obj:any)=>(
        <div>
          <RestaurantCard restaurant={obj}></RestaurantCard>
        </div>
      ))}
    </div>
  )
}

export default Restaurants