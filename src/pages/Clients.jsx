import React from 'react';
import Navbar from '../components/Navbar';

const clients = [
  {
    name: 'Client A',
    description: 'A leading recycling company specializing in ferrous metals.',
    logo: 'path/to/client-a-logo.png',
  },
  {
    name: 'Client B',
    description: 'An international importer of non-ferrous metal scraps.',
    logo: 'path/to/client-b-logo.png',
  },
  // Add more clients as needed
];

const Clients = () => {
  return (
   <>
          <div class="overflow-hidden">
                <div class="relative mx-auto max-w-7xl">
                    <div
                        class="absolute -right-60 -top-44 h-60 w-[36rem] transform-gpu md:right-0 
                        bg-[linear-gradient(115deg,var(--tw-gradient-stops))] 
                        from-[#fff1be] from-[28%]   
                        via-[#4fd1c5] via-[55%]    
                        via-[#4a90e2] via-[70%]    
                        to-[#5e60ff] to-[100%]
                        rotate-[-10deg] 
                        rounded-full blur-3xl">
                    </div>
                </div>
                <Navbar></Navbar>
          </div>
   
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Our Valued Clients
      </h2>
      <p className="text-center text-gray-600 mb-12">
        We collaborate with and support some of the most well-known brands and businesses around the globe, providing essential knowledge, discretion, and capability where and when our clients need it.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clients.map((client, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              className="mx-auto mb-4 h-20"
            />
            <h3 className="text-xl font-medium text-gray-700">{client.name}</h3>
            <p className="text-gray-500">{client.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};


export default Clients;
