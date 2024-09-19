// src/components/Footer.tsx
"use client";

import React from 'react';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const Footer = () => {
  return (
    <footer className="bg-green-300 py-8 text-black pl-[100px]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Left Section - Brand Info */}
        <div className="flex flex-col items-center md:items-start bg-black text-white p-8 rounded-tl-full rounded-bl-full md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-green-400">Enatega</h2>
          <p className="mt-4 text-center md:text-left">
            Enatega is an open-source delivery management platform for the future. We prioritize innovation, flexibility, and affordability, and offer a scalable, customizable solution that streamlines your delivery processes.
          </p>
        </div>

        {/* Center Section - Links */}
        <div className="text-center md:text-left md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
          </ul>
          <p className="mt-4 text-center md:text-left">Enatega – © 2022 All Rights Reserved</p>
        </div>

        {/* Right Section - Social Media */}
        <div className="flex flex-col items-center md:items-end md:w-1/3">
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Button icon="pi pi-facebook" className="p-button-rounded p-button-text text-black" />
            <Button icon="pi pi-twitter" className="p-button-rounded p-button-text text-black" />
            <Button icon="pi pi-instagram" className="p-button-rounded p-button-text text-black" />
            <Button icon="pi pi-linkedin" className="p-button-rounded p-button-text text-black" />
            <Button icon="pi pi-github" className="p-button-rounded p-button-text text-black" />
          </div>
          <div className="mt-4">
            <span className="text-black">Powered By </span>
            <span className="bg-black text-white py-1 px-2 rounded">ninjascode</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
