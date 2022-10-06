import { useState } from "react";

export type InputType = {
  width?: string;
  labelText?: string;
};

function Input({ width, labelText }: InputType) {
  const [activeLabel, setActiveLabel] = useState(false);

  return (
    <div
      className="relative m-auto mt-2.5 rounded border-1 border-gray"
      style={{ background: "red", width: `${width}%` }}
    >
      <label
        style={{ transform: "translateY(-50%)" }}
        className="absolute text-xs text-gray top-1/2 left-2 pointer-events-none"
      >
        {labelText}
      </label>
      <input
        type="text"
        className=" outline-0 w-full h-full py-2 bg-grayish pl-2"
      />
    </div>
  );
}

export default Input;
