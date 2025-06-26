import React from "react";

import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    name: "Anika Rahman",
    image: "https://i.pravatar.cc/100?img=1",
    review:
      "EcoBari completely transformed the way I garden. The community is so supportive and I’ve learned so much!",
    stars: 5,
  },
  {
    id: 2,
    name: "Rayhan Uddin",
    image: "https://i.pravatar.cc/100?img=2",
    review:
      "Loved the composting tips! It's easy to share my knowledge and help others go green.",
    stars: 4,
  },
  {
    id: 3,
    name: "Farzana Yasmin",
    image: "https://i.pravatar.cc/100?img=3",
    review:
      "The interface is clean, and the experience of reading real tips from real people is fantastic.",
    stars: 5,
  },
  {
    id: 4,
    name: "Jahidul Islam",
    image: "https://i.pravatar.cc/100?img=4",
    review:
      "I’ve made gardening friends through EcoBari and learned to grow herbs on my rooftop!",
    stars: 4,
  },
];

const Testimonial = () => {
  return (
    <section className="px-2 md:px-20   space-y-10">
      {/* Section header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-teal-950 dark:text-slate-300 mb-2">
          What Gardeners Say
        </h2>
        <p className="text-gray-400">
          Real stories from our users who’ve grown greener with EcoBari.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
