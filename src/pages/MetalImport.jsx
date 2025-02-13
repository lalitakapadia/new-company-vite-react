import React from 'react';
import Navbar from '../components/Navbar';

const MetalImport = () => {
    return (
        <>
            <div class="overflow-hidden">
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
                <Navbar />
            
            </div>
        </>
       
    );
}


export default MetalImport;