function Tip({ tip }) {
  const { image, title, difficulty, description, totalLike } = tip;
  return (
    <div className="card bg-slate-100 mx-auto max-w-[300px] shadow-sm">
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
        <p className="text-gray-900 ">{description}</p>
        <p>
          <span className="font-medium">Total Like: {totalLike} </span>
        </p>
      </div>
    </div>
  );
}

export default Tip;
