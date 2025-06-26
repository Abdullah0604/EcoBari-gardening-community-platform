import { Suspense } from "react";
import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import GardenersSection from "../components/GardenersSection/GardenersSection";
import Loading from "../components/Loading/Loading";
import OurPromises from "../components/OurPromises/OurPromises";
import Success from "../components/Success/Success";
import TopTrendingTips from "../components/TopTrendingTips/TopTrendingTips";
import AuthContext from "../contexts/AuthContext";

function Home() {
  return (
    <div className="space-y-20">
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
