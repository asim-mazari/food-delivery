"use client"
import { isFirebaseSupported, initializeFirebase } from '@/lib/firebase';
import React, { useEffect, useState } from 'react'
import ExploreCountries from '@/components/exploreCountries/countryCards';



function page() {

 

  return (
    <div className='lg:pl-[130px] lg:pr-[130px]'>
      <ExploreCountries></ExploreCountries>
    </div>
  );

}

export default page