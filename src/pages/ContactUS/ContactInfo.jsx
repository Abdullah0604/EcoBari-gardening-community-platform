import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import contactImg from "../../assets/banner/contact.jpg";

const ContactInfo = () => {
  return (
    <div
      className="md:w-1/2 relative  bg-cover bg-center text-white  flex flex-col justify-center "
      style={{
        backgroundImage: `url(${contactImg})`,
      }}
    >
      <div className=" w-full h-full   p-6 bg-black/86 flex flex-col justify-center   space-y-8 ">
        <div>
          <div className="flex items-center  gap-5 ">
            <FaMapMarkerAlt className="text-lg " />
            <h4>Address</h4>
          </div>
          <p className="text-gray-500 pl-8 pt-2 ">
            123 Green Road, Eco City, Bangladesh
          </p>
        </div>
        <div>
          <div className="flex items-center  gap-5 ">
            <FaPhoneAlt className="text-lg " />
            <h4>Let's Talk</h4>
          </div>
          <p className="text-gray-500 pl-8 pt-2 ">+880 1234 567 890</p>
        </div>
        <div>
          <div className="flex items-center  gap-5 ">
            <FaEnvelope className="text-lg " />
            <h3>General Support</h3>
          </div>
          <p className="text-gray-500 pl-8 pt-2 ">support@ecobari.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
