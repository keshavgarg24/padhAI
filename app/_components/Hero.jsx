import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Footer from "./Footer";
import { HiChevronDoubleRight } from "react-icons/hi";
import { BackgroundLinesDemo } from "@/components/background";

const Hero = () => {
  return (
    <div>
      <section className="h-screen">
        
          <BackgroundLinesDemo/>

            <div className="flex flex-wrap justify-center gap-4 cursor-pointer">
              <Link href={"/explore-course"}>
                <Button variant="startButton" size="lg">Let's Learn<HiChevronDoubleRight className="text-xl" /></Button>
              </Link>
            
          </div>
       
      
      
      </section>
    </div>
  );
};

export default Hero;
