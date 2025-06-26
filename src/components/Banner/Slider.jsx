import React from "react";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";

function Slider({ content }) {
  const { title, desc, btnText, img, navigate } = content;
  return (
    <div
      className="hero min-h-[70vh] rounded-lg  "
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-overlay rounded-lg"></div>
      <div className="hero-content max-w-[600px] rounded-lg   text-neutral-content text-center">
        <div className=" ">
          <h1 className="mb-5 text-5xl font-bold ">
            <Typewriter
              words={title}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h1>

          <p className="mb-5">{desc}</p>
          <Link to={navigate}>
            <button className="btn bg-green-600 text-slate-200 border-none shadow-none">
              {btnText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Slider;
