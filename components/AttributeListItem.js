import React, { useState } from "react";

export default function AttributeListItem({ option, filterHandle, checked }) {
  const handle = () => {
    filterHandle(option.value);
  };

  return (
    <button
      onClick={() => handle()}
      className="flex items-center justify-between mb-1 px-4 py-2 w-full rounded-lg text-left hover:bg-gray-50/10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
    >
      <span className="flex items-center">
        <input
          type="checkbox"
          checked={checked}
          className="items-center h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          readOnly
        />
        <span className="items-center ml-3 text-gray-800 text-sm">
          {option.label}
        </span>
      </span>
      <span className="items-center text-gray-600 text-xs">
        {option.amount}
      </span>
    </button>
  );
}
