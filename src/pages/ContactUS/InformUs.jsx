import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const InformUS = () => {
  return (
    <div className="px-2 md:px-20 pt-32 space-y-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700">
          Get in Touch
        </h2>
        <p className="text-gray-500">
          Have questions, feedback, or ideas? Reach out to the EcoBari team and
          we’ll get back to you shortly.
        </p>
      </div>

      {/* Main Contact Section */}
      <div className="flex flex-col md:flex-row rounded-xl shadow overflow-hidden ">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default InformUS;
