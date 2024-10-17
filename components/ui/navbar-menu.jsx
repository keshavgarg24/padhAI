"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const Menu = ({ setActive, children }) => {
    return (
      <nav
        onMouseLeave={() => setActive(null)}
        className="
          relative 
rounded-full 
border 
border-blue-600 
dark:bg-gray-900 
dark:border-gray-700 
bg-white 
shadow-lg 
shadow-blue-500/50 // Neon blue shadow
flex 
justify-center 
space-x-4  // Less horizontal space between items in mobile view
sm:space-x-6 // Slightly more space between items on larger screens
px-4 py-3  // Reduced horizontal and vertical padding for mobile view
sm:px-8 sm:py-5  // Increased padding for larger screens
max-w-[90%] sm:max-w-full // Navbar smaller horizontally in mobile view
top-40 sm:top-8  // Adjusted top margin for mobile and larger screens
mx-auto // Center align the navbar

        "
      >
        {children}
      </nav>
    );
  };
  
  export const MenuItem = ({ setActive, active, item, children }) => {
    return (
      <div
        onMouseEnter={() => setActive(item)}
        className="relative"
      >
        <motion.p
          transition={{ duration: 0.3 }}
          className="cursor-pointer 
            text-sm sm:text-lg // Reduced font size for mobile view
            font-medium 
            text-gray-800 
            dark:text-gray-200 
            hover:text-blue-600 
            dark:hover:text-blue-400 
            transition-colors duration-300"
        >
          {item}
        </motion.p>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              type: "spring",
              mass: 0.5,
              damping: 11.5,
              stiffness: 100,
              restDelta: 0.001,
              restSpeed: 0.001,
            }}
          >
            {active === item && (
              <div className="absolute top-[calc(100%_+_1.5rem)] left-1/2 transform -translate-x-1/2 pt-4">
                <motion.div
                  transition={{
                    type: "spring",
                    mass: 0.5,
                    damping: 11.5,
                    stiffness: 100,
                    restDelta: 0.001,
                    restSpeed: 0.001,
                  }}
                  layoutId="active"
                  className="bg-white dark:bg-gray-800 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-300 dark:border-gray-600 shadow-lg"
                >
                  <motion.div
                    layout
                    className="w-max h-full p-4 sm:p-5 // Reduced padding for mobile view"
                  >
                    {children}
                  </motion.div>
                </motion.div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    );
  };
  

export const ProductItem = ({
  title,
  description,
  href,
  src
}) => {
  return (
    <Link href={href} className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-lg shadow-lg"
      />
      <div>
        <h4 className="text-xl font-semibold mb-1 text-gray-900 dark:text-gray-100">
          {title}
        </h4>
        <p className="text-gray-600 text-sm dark:text-gray-400 max-w-[10rem]">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({
  children,
  ...rest
}) => {
  return (
    <Link
      {...rest}
      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
    >
      {children}
    </Link>
  );
};
