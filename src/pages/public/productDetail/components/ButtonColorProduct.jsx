import React from "react";

const ButtonColorProduct = ({ color , selectColor, setSelectColor }) => {

    const colorBackgrounds = {
        White: "bg-white",
        Red: "bg-red-700",
        Black: "bg-gray-900",
      };
    
      const colorRings = {
        White: "ring-gray-400",
        Red: "ring-red-700",
        Black: "ring-black",
      };

  return (
    <label 
        className={`relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none 
        ${colorRings[color]} ${selectColor === color && "ring ring-offset-1"}`}>
      <input 
        onChange={(e) => setSelectColor(e.target.value)} 
        type="radio" 
        name="color-choice" 
        value={color} 
        className="sr-only focus:ring" 
        aria-labelledby={`color-choice-${color}-label`}
      />
      <span id={`color-choice-${color}-label`} className="sr-only">
        {" "}
        {color}{" "}
      </span>
      <span className={`${colorBackgrounds[color]} h-8 w-8 rounded-full border border-black border-opacity-10`}></span>
    </label>
  );
};

export default ButtonColorProduct;
