"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";

export function WavyBackgroundDemo() {
  return (
    (<WavyBackground className="max-w-4xl mx-auto pb-40">
      <p
        className="text-2xl md:text-4xl lg:text-7xl text-grey-400 font-medium inter-var text-center mt-20">
        COMING SOON
      </p>
    </WavyBackground>)
  );
}
