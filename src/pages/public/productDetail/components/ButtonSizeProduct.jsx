import React from "react";

const ButtonSizeProduct = ({ name, inStock, selectSize, setSelectSize, renderStockProduct }) => {
  return (
    <label
      key={name}
      className={`${
        inStock ? "cursor-pointer bg-white text-gray-900" : "bg-gray-50 text-gray-200 cursor-not-allowed"
      } group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 sm:flex-1 sm:py-6 ${selectSize === name && "ring ring-gray-800"}`}
    >
      <input
        type="radio"
        name="size-choice"
        value={name}
        disabled={!inStock}
        className="sr-only"
        aria-labelledby={`size-choice-${name}-label`}
        onChange={(e) => setSelectSize(e.target.value)}
        onClick={() => renderStockProduct(name)}
      />
      <span id={`size-choice-${name}-label`}>{name}</span>
      {!inStock && (
        <span className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
          <svg className="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
            <line x1="0" y1="100" x2="100" y2="0" />
          </svg>
        </span>
      )}
    </label>
  );
};

export default ButtonSizeProduct;
