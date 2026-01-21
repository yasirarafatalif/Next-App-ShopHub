
import MainSlider from "@/Components/MainSlider";
import AuthInfo from "@/Components/Sections/AuthInfo";
import CTA from "@/Components/Sections/CTA";
import FAQ from "@/Components/Sections/FAQ";
import FeaturedProducts from "@/Components/Sections/FeaturedProducts";
import Features from "@/Components/Sections/Features";
import HowItWorks from "@/Components/Sections/HowItWorks";
import { StatsSection } from "@/Components/Sections/stats";

// import { TestimonialsSection } from "@/Components/Sections/TestimonialsSection";

export default function Home() {
  return (
    <div>
    

      <MainSlider></MainSlider>
      <FeaturedProducts></FeaturedProducts>
      <CTA></CTA>
      <StatsSection></StatsSection>

      <Features></Features>
      <AuthInfo></AuthInfo>

      <HowItWorks></HowItWorks>
      

      <FAQ></FAQ>

      {/* <TestimonialsSection></TestimonialsSection> */}
    </div>
  );
}
