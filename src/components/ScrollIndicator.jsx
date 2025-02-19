"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollY = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / pageHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50"
      style={{ width: `${scrollProgress}%` }}
      initial={{ width: "0%" }}
      animate={{ width: `${scrollProgress}%` }}
      transition={{ ease: "linear" }}
    />
  );
}
