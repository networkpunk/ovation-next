import React, { useState } from "react"

export default function AttributeListItem({ option, filterHandle }) {
  const [checked, setChecked] = useState(false)

  const handle = () => {
    setChecked(!checked)
    filterHandle(option.value)
  }

  return (
    <button
      onClick={() => handle()}
      className="flex items-center justify-between mb-1 px-4 py-2 w-full rounded-lg text-left text-sm font-medium text-purple-900 hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
    >
      <span className="flex items-center">
        <input
          type="checkbox"
          checked={checked}
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          readOnly
        />
        <label className="ml-3 text-gray-600">{option.label}</label>
      </span>
      <span className="text-gray-500">{option.amount}</span>
    </button>
  )
}
