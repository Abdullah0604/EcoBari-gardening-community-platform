import { GiPlantWatering, GiTreehouse, GiRecycle } from "react-icons/gi";
import { FaPeopleCarry } from "react-icons/fa";
import OurPromise from "./OurPromise";
function OurPromises() {
  const promisesContent = [
    {
      icon: <GiPlantWatering size={50} className="text-green-600" />,
      title: "Practical Gardening Tips",
      desc: "Receive useful, real-life plant care advice from experienced gardeners.",
    },
    {
      icon: <FaPeopleCarry size={50} className="text-green-600" />,
      title: "Supportive Community",
      desc: "Connect with friendly, like-minded gardeners ready to help and share.",
    },
    {
      icon: <GiRecycle size={50} className="text-green-600" />,
      title: "Eco-Friendly Focus",
      desc: "We promote sustainable practices like composting and recycling in every step.",
    },
    {
      icon: <GiTreehouse size={50} className="text-green-600" />,
      title: "Grow Together",
      desc: "From balcony pots to backyard jungles—grow your green space with us.",
    },
  ];
  return (
    <div className="my-30 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-xl gap-5">
      {promisesContent.map(({ icon, title, desc }, index) => (
        <OurPromise key={index} icon={icon} title={title} desc={desc} />
      ))}
    </div>
  );
}

export default OurPromises;
