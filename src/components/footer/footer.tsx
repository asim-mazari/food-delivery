"use client";

import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const Footer = () => {
  return (
    <footer className="text-black lg:pl-[130px]">
      <div className="bg-[#86efac] h-auto lg:rounded-l-[80px] lg:flex justify-between p-8">
        <div className="bg-black h-full lg:w-[300px] w-full rounded-[80px] p-[30px] text-center mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold text-green-400">Enatega</h2>
          <p className="mt-4 text-center text-[#fff]">
            Enatega is an open-source delivery management platform for the future. We prioritize innovation, flexibility, and affordability, and offer a scalable, customizable solution that streamlines your delivery processes.
          </p>
        </div>


        <div className="flex items-center">
  <div className="w-full">
    <div className="lg:w-[300px] w-full flex flex-col items-center mb-8 lg:mb-0">
      <h3 className="text-xl font-bold mb-4">Links</h3>
      <ul className="space-y-2 text-lg text-black text-center">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
        <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
      </ul>

      <hr className="w-full border-t-2 border-gray-400 mt-8" />

      <p className="text-black text-center mt-4">
        Enatega – © 2022 All Rights Reserved
      </p>
    </div>
  </div>
</div>


       <div className='flex items-center'>
          <div className="lg:w-[300px] w-full flex flex-col items-center">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-black hover:text-gray-800">
                  <i className="pi pi-facebook text-3xl"></i>
                </a>
                <a href="#" className="text-black hover:text-gray-800">
                  <i className="pi pi-twitter text-3xl"></i>
                </a>
                <a href="#" className="text-black hover:text-gray-800">
                  <i className="pi pi-instagram text-3xl"></i>
                </a>
                <a href="#" className="text-black hover:text-gray-800">
                  <i className="pi pi-linkedin text-3xl"></i>
                </a>
                <a href="#" className="text-black hover:text-gray-800">
                  <i className="pi pi-github text-3xl"></i>
                </a>
              </div>
              <p className="text-black">Powered By <span className="font-bold">ninjacode</span></p>
          </div>
       </div>
      </div>

    </footer>
  );
};

export default Footer;
