import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa6";

function TestimonialCard({ testimonial }) {
  const { id, stars, review, image, name } = testimonial;
  return (
    <div
      key={id}
      className="bg-gray-50 rounded-xl shadow p-6 flex flex-col gap-4"
    >
      {/* Stars */}
      <div className="flex gap-1 text-yellow-500">
        {[...Array(stars)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>

      {/* Quote */}
      <div className="text-gray-700 italic flex gap-2 items-start">
        <FaQuoteLeft className="text-green-600 text-lg mt-1" />
        <p>{review}</p>
      </div>

      {/* User Info */}
      <div className="flex items-center gap-4 mt-2">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="text-gray-800 font-medium">{name}</span>
      </div>
    </div>
  );
}
export default TestimonialCard;
