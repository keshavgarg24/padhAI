import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Footer from "./_components/Footer";
import { NavbarDemo } from "@/components/navbar";

export default function Home() {
  return (
      <>
      
      <NavbarDemo/>
      {/* header */}
       <Header/>
      {/* Hero Section */}
      <Hero/>
   <Footer/>
      </>
  );
}
