import { motion } from "framer-motion";

 export default function Heros ({title, description}) {
    return (
        <>

        <div className="mx-auto px-2">
          {/* Hero Section */}
          <section className="rounded-3xl ring-1 ring-inset ring-black/20 h-screen/2 p-24 text-black relative flex flex-col justify-center items-center text-center  
          bg-[linear-gradient(115deg,var(--tw-gradient-stops))] 
          from-[#fff1be] from-[28%] 
          via-[#4fd1c5] via-[55%] 
          via-[#4a90e2] via-[70%] 
          to-[#5e60ff] to-[100%] 
          sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))] p-8">
            <motion.h1
              className="text-5xl font-bold mb-4 "
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {title}
            </motion.h1>
            <motion.p
              className="text-lg opacity-80 max-w-xl text-gray-950/75"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              {description}
            </motion.p>
          </section>
        </div>
        </>
    )
 } 