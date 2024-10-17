import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import TypewriterEffectDemo from "./typewriter";

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full min-h-screen px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="w-full flex flex-col items-center justify-center">
        <TypewriterEffectDemo />
      </div>
    </BackgroundLines>
  );
}
