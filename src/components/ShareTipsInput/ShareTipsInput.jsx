import React from "react";

function ShareTipsInput({ label, inputType, dValue, selectValue }) {
  return (
    <>
      {inputType === "select" ? (
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <label className="label capitalize text-gray-800 text-base font-medium">
            {label}
          </label>
          <select defaultValue={selectValue[0]} className="select  w-full">
            {selectValue.map((value) => (
              <option defaultValue={value}>{value}</option>
            ))}
          </select>
        </fieldset>
      ) : (
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <label className="label capitalize text-gray-800 text-base font-medium">
            {label}
          </label>
          <input
            type={inputType}
            className="input w-full"
            name={label}
            defaultValue={dValue || ""}
            placeholder={`${label === "photo" ? "Photo URL" : label}`}
            readOnly={inputType === "email" || inputType === "name"}
          />
        </fieldset>
      )}
    </>
  );
}

export default ShareTipsInput;
