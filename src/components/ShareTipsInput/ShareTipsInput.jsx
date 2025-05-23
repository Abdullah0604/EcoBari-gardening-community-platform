function ShareTipsInput({ label, inputType, readValue, selectValue }) {
  return (
    <>
      {inputType === "select" ? (
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <label className="label capitalize text-gray-800 text-base font-medium">
            {label}
          </label>
          <select
            name={label.split(" ").join("")}
            defaultValue={readValue ? readValue : selectValue[0]}
            className="select  w-full"
            required
          >
            {selectValue.map((value, i) => (
              <option key={i} defaultValue={value}>
                {value}
              </option>
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
            name={label.split(" ").join("")}
            defaultValue={readValue || ""}
            placeholder={`${label === "photo" ? "Photo URL" : label}`}
            readOnly={inputType === "email" || inputType === "name"}
            required
          />
        </fieldset>
      )}
    </>
  );
}

export default ShareTipsInput;
