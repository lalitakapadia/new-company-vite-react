                                                                                                                                                                                        import React from 'react';
import Navbar from '../components/Navbar';
const AboutUs = () => {
    return (
        <body class="bg-gray-100 text-gray-800 ">
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
                <div class="mt-16 px-6 lg:px-8">
                    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        <div class="mx-auto max-w-2xl lg:max-w-7xl">
                            <h1
                                class="text-pretty text-3xl font-medium tracking-tighter text-gray-950 data-[dark]:text-white sm:text-6xl">
                                Our Commitment to Excellence</h1>
                            <p class="mt-6 max-w-3xl text-2xl font-medium text-gray-500">
                                We are dedicated to conducting our operations in a socially responsible manner, recognizing our role as a global corporate citizen.</p>
                        </div>
                        <div class="mx-auto max-w-2xl lg:max-w-7xl   ">
                            <img src="./public/images/inspection.jpg" alt="inspection" class="rounded-3xl mt-4 rounded-3 shadow-md"></img>
                        </div>
                    </div>
                </div>
                
                <div class="relative py-24">
                    <div
                        class="absolute inset-x-2 bottom-0 top-48 rounded-3xl ring-1 ring-inset ring-black/5 bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-[28%]   
                        via-[#4fd1c5] via-[55%]    
                        via-[#4a90e2] via-[70%]    
                        to-[#5e60ff] to-[100%] 
                        sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]">
                    </div>
                    <div class="relative px-4 lg:px-12">
                        <div class="mx-auto max-w-2xl lg:max-w-7xl">
                            <div class="grid grid-cols-1  sm:grid-cols-1 ">
                                <div
                                    class="-m-2 grid grid-cols-1 rounded-3xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
                                    <div class="grid grid-cols-1 rounded-3xl p-2 shadow-md shadow-black/5">
                                        <div class="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
                                            <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                                                <div>
                                                    <h3 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                                                        Our Values
                                                    </h3>
                                                    <p class="mt-3 max-w-3xl text-lg text-gray-500">
                                                        We adhere to corporate governance principles that emphasize integrity, transparency, and accountability, ensuring the long-term success and sustainability of Company Enterprise.
                                                    </p>
                                                    <div class="mt-8 space-y-10">
                                                        <div class="flex">
                                                            <div class="flex-shrink-0">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
  {/* Gradient Definition Inline */}
  <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" style={{ stopColor: '#fff1be', stopOpacity: 1 }} />
    <stop offset="28%" style={{ stopColor: '#4fd1c5', stopOpacity: 1 }} />
    <stop offset="55%" style={{ stopColor: '#4a90e2', stopOpacity: 1 }} />
    <stop offset="70%" style={{ stopColor: '#5e60ff', stopOpacity: 1 }} />
    <stop offset="100%" style={{ stopColor: '#5e60ff', stopOpacity: 1 }} />
  </linearGradient>
  
  {/* Shield Shape with Gradient */}
  <path d="M7.5 1L1 5V11L7.5 14L14 11V5L7.5 1Z" fill="url(#shieldGradient)" stroke="black" strokeWidth="1.5" />
</svg>


                                                                {/* <div class="flex items-center justify-center h-12 w-12 rounded-md bg-[linear-gradient(115deg,var(--tw-gradient-stops))] 
                                                                    from-[#fff1be] from-[28%]   
                                                                    via-[#4fd1c5] via-[55%]    
                                                                    via-[#4a90e2] via-[70%]    
                                                                    to-[#5e60ff] to-[100%] 
                                                                    sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))] text-white">
                                                                
                                                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#5e60ff" aria-hidden="true">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2v20" />
                                                                    </svg>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">

                                                                        <path d="M7.5 1L1 5V11L7.5 14L14 11V5L7.5 1Z" fill="none" stroke="black" stroke-width="1.5"/>
                                                                    </svg>
                                                                </div> */}
                                                            </div>
                                                            <div class="ml-4">
                                                                <h4 class="text-lg leading-6 font-medium text-gray-900">Integrity</h4>
                                                                <p class="mt-2 text-base text-gray-500 text-sm font-medium">
                                                                    Integrity is at the core of our business values. Our Company is committed to maintaining high standards of professional conduct and engaging in ethical and fair business practices with our employees, stakeholders, and third parties.
                                                                </p>
                                                            </div>
                                                        </div>
                                    
                                                        <div class="flex">
                                                            <div class="flex-shrink-0">
                                                                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#b0c4de] 
                                                                    from-[#fff1be] from-[28%]   
                                                                    via-[#4fd1c5] via-[55%]    
                                                                    via-[#4a90e2] via-[70%]    
                                                                    to-[#5e60ff] to-[100%] 
                                                                    sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))] text-white">
                                                                
                                                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#5e60ff" aria-hidden="true">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2v20" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <div class="ml-4">
                                                                <h4 class="text-lg leading-6 font-medium text-gray-900">Collaboration</h4>
                                                                <p class="mt-2 text-base text-gray-500">
                                                                    Our company collaborates with some of the world's largest multinational corporations and most renowned brands to enhance the social, ethical, and environmental impacts of their products, services, and supply chains.
                                                                </p>
                                                            </div>
                                                        </div>
                                    
                                                        <div class="flex">
                                                            <div class="flex-shrink-0">
                                                                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-[linear-gradient(115deg,var(--tw-gradient-stops))] 
                                                                     from-[#fff1be] from-[28%]   
                                                                     via-[#4fd1c5] via-[55%]    
                                                                     via-[#4a90e2] via-[70%]    
                                                                     to-[#5e60ff] to-[100%] 
                                                                     sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))] text-white">
                                    
                                                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#5e60ff" aria-hidden="true">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2v20" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <div class="ml-4">
                                                                <h4 class="text-lg leading-6 font-medium text-gray-900">Ethics</h4>
                                                                <p class="mt-2 text-base text-gray-500">
                                                                    Our Compliance Code and compliance structure are designed to support adherence to our Code of Ethics.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                    
                                                <div class="mt-10 lg:mt-0 lg:col-start-2">
                                                    <img class="mx-auto rounded-lg shadow-lg" src="./public/images/RusticAboutUs.jpg" alt="About Us"></img>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
   );
};

 export default AboutUs;