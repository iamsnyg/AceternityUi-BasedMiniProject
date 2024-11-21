// import { main } from "framer-motion/client";
import FeatureCourses from "@/components/FeatureCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main 
    className="min-h-screen bg-black/[0.9] antialiased bg-grid-white/[0.02]"
    >
      <HeroSection />
      <FeatureCourses />
      <WhyChooseUs />
      <TestimonialCards />
      <UpcomingWebinar />
      <Instructor />
      <Footer />
    </main>
  );
}
