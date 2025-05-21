import React from "react";

function Input({ label, type }) {
  return (
    <div>
      <label className="label text-base capitalize font-semibold text-gray-800">
        {label}
      </label>
      <input
        name={label}
        type={type}
        className="input w-full text-base"
        placeholder={label === "photo" ? "photo URL" : label}
        required
      />
    </div>
  );
}

export default Input;
