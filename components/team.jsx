"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Keshav Garg",
    designation: "Designer & Developer"
    image:
      "/keshav.jpg",
  },
  {
    id: 2,
    name: "Inder Sharma",
    designation: "Presenter & Co-developer"
    image:
      "/inder.png",
  },
  {
    id: 3,
    name: "Ayushi Joshi",
    designation: "Content"
    image:
      "/ayushi.png",
  },
  {
    id: 4,
    name: "Ashmit Negi",
    designation: " Co-presnter"
    image:
      "/ashmit.png",
  },
];

export function AnimatedTooltipPreview() {
  return (
    (<div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>)
  );
}
