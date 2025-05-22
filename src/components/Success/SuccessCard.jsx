function SuccessCard({ title, desc }) {
  return (
    <div className="bg-slate-100  hover:scale-95 duration-500 hover:bg-orange-100 shadow-sm max-w-52 text-center flex flex-col justify-center items-center gap-[2px] px-10 py-14">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  );
}

export default SuccessCard;
