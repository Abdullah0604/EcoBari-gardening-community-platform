import React from "react";

function Slider({ content }) {
  const { title, desc, btnText, img } = content;
  return (
    <div
      className="hero min-h-[85vh] rounded-lg  "
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-overlay rounded-lg"></div>
      <div className="hero-content max-w-[600px] rounded-lg   text-neutral-content text-center">
        <div className=" ">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <p className="mb-5">{desc}</p>
          <button className="btn bg-green-600 border-none shadow-none">
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
