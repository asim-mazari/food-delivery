"use client";

import React from 'react';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Logo } from '@/assets'; 
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4 sticky top-[-1px] z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">

        <Link href="/">
            <div className="flex items-center space-x-2 mb-4 sm:mb-0 ">
                <div>
                  <Image src={Logo} alt="Logo" className="h-12 w-12" />
                </div>
                <h1 className="text-xl font-bold font-sans">Enatega</h1>
            </div>
        </Link>

        <div className="hidden sm:flex items-center space-x-2 bg-gray-100 p-2 rounded-full">
          <i className="pi pi-map-marker text-lg text-gray-500"></i>
          <span className="font-medium text-gray-700">Berlin, Germany</span>
          <i className="pi pi-chevron-down text-sm text-gray-500"></i>
        </div>

        <div className="flex items-center space-x-3 sm:space-x-6">
          <Button
            label="Login"
            className="p-button-outlined border-gray-300 rounded-full text-black border-2"
            style={{ padding: '0.5rem 1.5rem' }}
          />

        <div className='hidden sm:flex'>
          <Button
              label="Sign up"
              className="bg-green-500 text-white rounded-full hover:bg-green-600"
              style={{ padding: '0.5rem 1.5rem' }}
            />
        </div>


          <Button
            icon="pi pi-shopping-bag"
            className="p-button-text text-black"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
