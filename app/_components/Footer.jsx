"use client"
import { AnimatedTooltipPreview } from '@/components/team'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Footer = () => {
  const path = usePathname();
  const menu = [
    {
      id: 1,
      name: 'About Us',
      path: '/about'
    },
    {
      id: 2,
      name: 'Contact Us',
      path: '/contact'
    },
    {
      id: 3,
      name: 'Terms & Conditions',
      path: '/terms'
    },
  ]
  
  return (
    <footer className="bg-white dark:bg-gray-900 py-8">
       {/* Meet the TEAM Section */}
       <div className="flex flex-col items-center text-center z-10 mt-10 mb-12">
          <h2 className="text-3xl font-bold text-blue-500 mb-6">Meet the TEAM</h2>
          <AnimatedTooltipPreview />
        </div>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        
        {/* Footer Content */}
        <div className="text-center">
          <ul className="mt-10 flex justify-center gap-12 text-xl font-medium text-gray-500 dark:text-gray-400">
            {menu.map((item) => (
              <li key={item.id}>
                <Link href={item.path} className="transition-colors hover:text-gray-800 dark:hover:text-gray-100">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Footer Bottom Text */}
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} padhAI. All Rights Reserved.
          </p>
        </div>
        
      </div>
      
    </footer>
  );
}

export default Footer;
