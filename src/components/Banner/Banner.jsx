import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import Slider from "./Slider";
import banner from "../../assets/banner/banner-02.jpg";
import belconyBanner from "../../assets/banner/belcony-banner.jpg";
import compostingBanner from "../../assets/banner/composting-banner.jpg";
function Banner() {
  const contents = [
    {
      title: "Green Thumb Meetup 2025",
      desc: "Join our weekend gardening meetup! Learn composting, share plant tips, and connect with local garden lovers.",
      btnText: "Join Event",
      img: banner,
    },
    {
      title: "Balcony Garden Basics",
      desc: "Discover how to turn your small space into a green paradise. Free tools & expert tips included!",
      btnText: "Reserve Your Spot",
      img: belconyBanner,
    },
    {
      title: "Community Compost Drive",
      desc: "Bring your kitchen waste and learn to compost! Let’s build a greener neighborhood together.",
      btnText: "Get Involved",
      img: compostingBanner,
    },
  ];
  return (
    <div className="mt-20 px-2 md:px-0">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2000, // 3 seconds
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper w-full mx-auto  rounded-xl my-10"
      >
        {contents.map((content, i) => (
          <SwiperSlide key={i}>
            <Slider content={content} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Banner;
