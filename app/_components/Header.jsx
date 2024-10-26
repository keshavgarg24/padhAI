import { Button } from "@/components/ui/button";
import { RxGithubLogo } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image"; // Import the Image component
import React from "react";

const Header = () => {
  return (
    <div className="relative z-50 flex justify-between p-5 items-center">
      <div className="flex items-center gap-2">
        {/* Logo from the public folder */}
        <Link href="/" aria-label="Home">
          <Image
            src="/logo.png" // Path to your logo image
            alt="Logo"
            width={50} // Set your desired width
            height={50} // Set your desired height
            className="object-contain" // Optional styling
          />
        </Link>
      </div>
      <div className="flex justify-center items-center gap-10 cursor-pointer">
        <Link href={"https://github.com/keshavgarg24/padhAI"}>
          <RxGithubLogo className="text-3xl" />
        </Link>
        <Link href={'/courses'}>
          <Button variant="startButton">Sign in</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
