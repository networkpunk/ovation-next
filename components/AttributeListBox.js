import React from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";

export default function AttributeListBox({ attributes }) {
  return (
    <React.Fragment>
      {attributes.map((section) => (
        <Disclosure
          as="div"
          key={section.id}
          className="border-b border-gray-200 py-6"
        >
          {({ open }) => (
            <React.Fragment>
              <h3 className="-my-3 flow-root">
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span className="font-semibold text-lg">{section.name}</span>
                  <span className="flex items-center">
                    <span className="mr-2 text-xs text-gray-500">
                      {section.amount}
                    </span>
                    {open ? (
                      <MinusIcon className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <PlusIcon className="h-5 w-5" aria-hidden="true" />
                    )}
                  </span>
                </Disclosure.Button>
              </h3>
              <Disclosure.Panel className="pt-6">
                {section.options.map((option, optionIdx) => (
                  <button
                    key={option.value}
                    className="flex items-center justify-between mb-1 px-4 py-2 w-full rounded-lg text-left text-sm font-medium text-purple-900 hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  >
                    <span className="flex items-center">
                      <input
                        id={`filter-${section.id}-${optionIdx}`}
                        name={`${section.id}[]`}
                        defaultValue={option.value}
                        type="checkbox"
                        defaultChecked={option.checked}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="ml-3 text-gray-600">{option.label}</span>
                    </span>
                    <span className="text-gray-500">{option.amount}</span>
                  </button>
                ))}
              </Disclosure.Panel>
            </React.Fragment>
          )}
        </Disclosure>
      ))}
    </React.Fragment>
  );
}
