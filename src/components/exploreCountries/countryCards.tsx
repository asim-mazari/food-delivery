import React from 'react';

const countries = [
  {
    name: 'Cyprus',
    flag: 'https://flagcdn.com/w320/cy.png', // Example URL for flag image
  },
  {
    name: 'Estonia',
    flag: 'https://flagcdn.com/w320/ee.png',
  },
  {
    name: 'Germany',
    flag: 'https://flagcdn.com/w320/de.png',
  },
  {
    name: 'Georgia',
    flag: 'https://flagcdn.com/w320/ge.png',
  },
  {
    name: 'Denmark',
    flag: 'https://flagcdn.com/w320/dk.png',
  },
  {
    name: 'Greece',
    flag: 'https://flagcdn.com/w320/gr.png',
  },
  { name: 'Cyprus', flag: 'https://flagcdn.com/w320/cy.png' },
  { name: 'Georgia', flag: 'https://flagcdn.com/w320/ge.png' },
  { name: 'Estonia', flag: 'https://flagcdn.com/w320/ee.png' },
  { name: 'Germany', flag: 'https://flagcdn.com/w320/de.png' },
  { name: 'Denmark', flag: 'https://flagcdn.com/w320/dk.png' },
  { name: 'Greece', flag: 'https://flagcdn.com/w320/gr.png' },
];

const ExploreCountries = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Explore Countries</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {countries.map((country, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center">
              <img
                src={country.flag}
                alt={country.name}
                className="w-8 h-8 rounded-full mr-4"
              />
              <span className="text-lg font-medium">{country.name}</span>
            </div>
            <span className="text-gray-400">{'>'}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCountries;
