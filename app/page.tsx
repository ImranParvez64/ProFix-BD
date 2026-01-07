import Image from "next/image";
import HeroSection from "./Sections/Hero";
import AboutSection from "./Sections/About";
import { GallerySection } from "./Sections/Gallery";
import Testimonial from "./Sections/TestimonialSection";
import Contact from "./Sections/ContactSection";
import ServicesSection from "./Sections/Services";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <ServicesSection></ServicesSection>
      <GallerySection></GallerySection>
      <Testimonial></Testimonial>
      <Contact></Contact>
      

    </div>
  );
}
