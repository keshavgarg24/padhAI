"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-4 md:top-8" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn(
        "fixed top-4 inset-x-0 max-w-full md:max-w-2xl mx-auto z-50 px-2 md:px-4", // Adjust the padding for mobile
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Menu">
          <div className="flex flex-col space-y-2 md:space-y-4 text-xs md:text-sm"> {/* Smaller text size on mobile */}
            <HoveredLink href="/about">About Us</HoveredLink>
            <HoveredLink href="/contact">Contact Us</HoveredLink>
            <HoveredLink href="/terms">Terms & Conditions</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2 md:gap-4 md:p-4"> {/* Adjust padding and gap for mobile */}
            <ProductItem
              title="AI Course Generator"
              href="/courses"
              src="/coourses.png"
              description="Create personalized AI-driven courses effortlessly with our AI Course Generator. Tailor content for any learning level in just a few clicks."
            />
            <ProductItem
              title="AI Quiz"
              href="/quiz"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Evaluate your AI knowledge with our AI Quiz. Test your skills and get instant feedback to improve your understanding."
            />
            <ProductItem
              title="Gamified Learning"
              href="/games"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Engage with AI concepts through interactive games. Learn while having fun and track your progress with our Gamified Learning platform."
            />
            <ProductItem
              title="3D classroom"
              href="/classroom"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Experience a virtual classroom with our 3D classroom. Interact with AI experts and peers in a realistic environment to enhance your learning."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-2 md:space-y-4 text-xs md:text-sm"> {/* Smaller text size on mobile */}
            <HoveredLink href="/">Individual</HoveredLink>
            <HoveredLink href="/">Team</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
