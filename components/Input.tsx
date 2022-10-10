import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export type InputType = {
  width?: string;
  labelText?: string;
  value?: any;
  icon?: IconDefinition | null;
  type?: string;
};

function Input({ width, labelText, value, icon, type }: InputType) {
  const [activeLabel, setActiveLabel] = useState(false);
  const [showPassword, setShowPassword] = useState(type || "text");

  return (
    <div
      className="relative m-auto mt-2.5 rounded border-1 border-gray"
      style={{ width: `${width}%` }}
      onFocus={() => setActiveLabel(true)}
      onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
        if (!e.target.value) {
          setActiveLabel(false);
        }
      }}
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
        type={showPassword}
        className=" outline-0 w-full h-full pt-4 pb-1.5 bg-grayish pl-2 text-xs"
        {...value}
      />
      {icon ? (
        <div className="absolute right-2 top-2 flex items-center">
          <FontAwesomeIcon
            className={`text-xl text-${
              icon.iconName.includes("mark") ? "red-600" : "gray"
            }`}
            icon={icon}
          />
          {type === "password" ? (
            <p
              onClick={() => {
                if (showPassword === "text") {
                  setShowPassword("password");
                } else {
                  setShowPassword("text");
                }
              }}
              className="ml-2 text-sm font-semibold cursor-pointer"
            >
              Afiseaza
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default Input;
