import { Link } from "react-router";
import { keyframes } from "@emotion/react";
import { Fade } from "react-awesome-reveal";

function Tip({ tip }) {
  const { image, title, difficulty, description, totalLike, _id } = tip;
  // console.log(tip);
  const customFadeUp = keyframes`
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    `;

  return (
    <div className="card bg-slate-100 mx-auto max-w-[320px] shadow-sm overflow-hidden">
      <Fade keyframes={customFadeUp} triggerOnce duration={1400}>
        <figure>
          <img
            className="w-full h-[200px] object-cover"
            src={image}
            alt="Shoes"
          />
        </figure>
      </Fade>

      <div className="card-body px-2  ">
        <Fade keyframes={customFadeUp} triggerOnce duration={1400}>
          <div className=" w-fit px-4 rounded-full text-sm  bg-green-500 text-slate-100">
            {difficulty}
          </div>
        </Fade>

        <Fade keyframes={customFadeUp} triggerOnce duration={1400}>
          <h2 className="card-title text-gray-900">{title}</h2>
        </Fade>
        <Fade keyframes={customFadeUp} triggerOnce duration={1400}>
          <p className="text-gray-500 ">
            {description.split(" ").slice(0, 15).join(" ")}......
          </p>
        </Fade>

        <Fade keyframes={customFadeUp} triggerOnce duration={1400}>
          <p>
            <span className="font-medium dark:text-gray-800">
              Total Like: {totalLike}{" "}
            </span>
          </p>
        </Fade>

        <Fade keyframes={customFadeUp} triggerOnce duration={1400}>
          <Link to={`/browse-tips/${_id}`}>
            <button className="px-2 py-1 rounded-md bg-green-500 cursor-pointer text-slate-200">
              See Details
            </button>
          </Link>
        </Fade>
      </div>
    </div>
  );
}

export default Tip;
