import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import Slider from "./Slider";
import banner from "../../assets/banner/banner-02.jpg";
import belconyBanner from "../../assets/banner/belcony-banner.jpg";
import compostingBanner from "../../assets/banner/composting-banner.jpg";
function Banner() {
  const contents = [
    {
      title: [
        "Explore: Green Thumb Tips",
        "Discover composting ideas",
        "Find plant care hacks",
        "Get inspired by garden lovers",
      ],
      desc: "Dive into a world of green! Explore composting tricks, plant care tips, and connect with gardening enthusiasts.",
      btnText: "Explore Tips",
      img: banner,
      navigate: "/browse-tips",
    },
    {
      title: [
        "Share: Your Balcony Garden Tricks",
        "Inspire others with your ideas",
        "Upload photos & steps",
        "Grow the community together",
      ],
      desc: "Got a creative balcony garden setup? Share your methods, tools, and photos to help others grow green!",
      btnText: "Share Your Tip",
      img: belconyBanner,
      navigate: "/share-garden-tip",
    },
    {
      title: [
        "Manage: Your Shared Garden Tips",
        "Update your old tips",
        "Delete irrelevant ideas",
        "Keep your content fresh",
      ],
      desc: "Take control of your shared gardening tips. Edit, update, or remove your content anytime from your profile.",
      btnText: "Manage Tips",
      img: compostingBanner,
      navigate: "/my-tips",
    },
  ];

  return (
    <div className="pt-24 px-2 ">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={false}
        modules={[Pagination]}
        className="mySwiper w-full mx-auto  rounded-xl "
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
