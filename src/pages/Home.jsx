import Footer from "../components/Footer/Footer";
import BookHighlights from "../components/HomeSections/BookHighlights";
import Features from "../components/HomeSections/Features";
import BookSlider from "../components/Sliders/BookSlider";
import LandingSlider from "../components/Sliders/LandingSlider";

const Home = () => {
   return (
      <section className="mt-[68px]">
         <LandingSlider />
         <Features />
         <BookHighlights />
         <BookSlider />
      </section>
   );
};

export default Home;
