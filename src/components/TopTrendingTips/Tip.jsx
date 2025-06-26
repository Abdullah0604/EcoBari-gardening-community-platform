import { Link } from "react-router";

function Tip({ tip }) {
  const { image, title, difficulty, description, totalLike, _id } = tip;
  console.log(tip);
  return (
    <div className="card bg-slate-100 mx-auto max-w-[320px] shadow-sm">
      <figure>
        <img
          className="w-full h-[200px] object-cover"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body px-2  ">
        <div className=" w-fit px-4 rounded-full text-sm  bg-green-500 text-slate-100">
          {difficulty}
        </div>
        <h2 className="card-title text-gray-900">{title}</h2>
        <p className="text-gray-500 ">
          {description.split(" ").slice(0, 15).join(" ")}......
        </p>
        <p>
          <span className="font-medium dark:text-gray-800">
            Total Like: {totalLike}{" "}
          </span>
        </p>
        <Link to={`/browse-tips/${_id}`}>
          <button className="px-2 py-1 rounded-md bg-green-500 cursor-pointer text-slate-200">
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Tip;
