import React from 'react'
import Restaurants from './restaurant/restaurants';
interface Props{
    sections?:any;
}

const Sections:React.FC<Props>=({sections})=> {
    
  return (
    <div className='bg-[#8ee590] w-full pb-[20px]'>
        <div className='bg-[#eff4f7] w-[90%] rounded-r-[80px] pl-[5%] pt-[30px]'>
            {sections.map((obj:any)=>(
              <div>
                 <div className="my-8">
                    <div className="w-[100px] h-2 bg-green-600 mb-2"></div>
                    <h2 className="text-3xl font-bold text-gray-900">
                        {obj?.name}
                    </h2>
                 </div>

                 <Restaurants Restaurants={obj.restaurants}></Restaurants>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Sections