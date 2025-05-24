import React from "react";
import { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

function OurPromise({ icon, title, desc, i }) {
  const customFadeUp = keyframes`
    from {
      opacity: 0;
      transform: translateY(100px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  return (
    <Fade
      direction="up"
      keyframes={customFadeUp}
      duration={1500}
      triggerOnce
      delay={300 * i}
    >
      <div className="group shadow-lg rounded-lg bg-slate-100 hover:bg-green-100 hover:-translate-2 duration-500  text-center flex flex-col justify-center items-center gap-3 px-10 py-14">
        <span className="p-4  group-hover:bg-green-200 group-hover:text-white  duration-500 bg-sky-100  rounded-full">
          {icon}
        </span>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-400">{desc}</p>
      </div>
    </Fade>
  );
}

export default OurPromise;
