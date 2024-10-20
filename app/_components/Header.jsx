import { Button } from "@/components/ui/button";
import { RxGithubLogo } from "react-icons/rx";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="relative z-50 flex justify-between p-5  items-center">
      <div className="flex items-center gap-2"></div>
      <div className="flex justify-center items-center gap-10 cursor-pointer">
        <Link href={"https://github.com/keshavgarg24/padhAI"}>
          <RxGithubLogo className="text-3xl" />
        </Link>
        <Link href={'/courses'}>
          <Button variant="startButton">Get started</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
