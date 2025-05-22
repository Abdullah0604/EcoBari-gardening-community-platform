import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import GardenersSection from "../components/GardenersSection/GardenersSection";
import OurPromises from "../components/OurPromises/OurPromises";
import Success from "../components/Success/Success";
import TopTrendingTips from "../components/TopTrendingTips/TopTrendingTips";

function Home() {
  return (
    <div>
      <Banner />
      <OurPromises />
      <About />
      <GardenersSection />
      <TopTrendingTips />
      <Success />
    </div>
  );
}

export default Home;
