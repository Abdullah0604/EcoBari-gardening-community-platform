import React from "react";
import Swal from "sweetalert2";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thanks for reaching out to EcoBari 🌿",
    });
    e.target.reset();
  };

  return (
    <div className="md:w-1/2 p-8 bg-white   rounded">
      <h3 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-4">
        Send Us a Message
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* First + Last Name */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label
              htmlFor="firstName"
              className="block mb-1 text-sm font-medium text-gray-700 "
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              required
              className="w-full border border-gray-300 dark:border-gray-700 px-4 py-2 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="lastName"
              className="block mb-1 text-sm font-medium text-gray-700 "
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              required
              className="w-full border border-gray-300 dark:border-gray-700 px-4 py-2 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block mb-1 text-sm font-medium text-gray-700 "
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full border border-gray-300 dark:border-gray-700 px-4 py-2 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block mb-1 text-sm font-medium text-gray-700 "
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="4"
            required
            className="w-full border border-gray-300 dark:border-gray-700 px-4 py-2 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-300"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
