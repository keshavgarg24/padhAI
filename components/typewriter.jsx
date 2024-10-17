"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";

export default function TypewriterEffectDemo() {
  const words = [
    {
      text: "padh",
      className: "text-6xl sm:text-7xl md:text-8xl font-bold",
    },
    {
      text: "AI",
      className: "text-8xl sm:text-9xl md:text-9xl font-bold text-blue-600 dark:text-blue-400",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[40rem] p-6">
      <TypewriterEffect words={words} />
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 space-x-0 sm:space-x-4 mt-10">
      </div>
      <p className="text-neutral-800 dark:text-neutral-200 text-base sm:text-2xl mb-4 text-center font-bold">
        Study what you want and not what you are told to.
      </p>
      <p className="text-neutral-600 dark:text-neutral-200 text-lg sm:text-xl mt-4 text-center">
        Start your journey with the future of learning.
      </p>
      <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-2 text-center">
        AI-powered tools and resources to help you grow.
      </p>
    </div>
  );
}
