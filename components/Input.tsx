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
      onFocus={() => setActiveLabel(true)}
      onBlur={() => setActiveLabel(false)}
    >
      <label
        style={{
          transform: activeLabel ? "translateY(2px)" : "translateY(10px)",
          transition: "font-size 0.1s ease-in, transform 0.1s ease-in",
        }}
        className={`absolute ${
          activeLabel ? "text-smalltxt" : "text-xs"
        } text-gray left-2 pointer-events-none`}
      >
        {labelText}
      </label>
      <input
        type="text"
        className=" outline-0 w-full h-full pt-4 pb-1.5 bg-grayish pl-2 text-xs"
      />
    </div>
  );
}

export default Input;
