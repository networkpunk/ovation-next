import React from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import AttributeListItem from "./AttributeListItem";

export default function AttributeListBox({ filters, filterHandle }) {
  return (
    <div className="bg-white/20 rounded-lg pb-2">
      {filters.map((section) => (
        <Disclosure as="div" key={section.id} className="mx-2 pt-2">
          {({ open }) => (
            <React.Fragment>
              <Disclosure.Button className="flex items-center w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="font-semibold text-lg">{section.name}</span>
                <span className="flex items-center">
                  <span className="mr-2 text-xs text-gray-500">
                    {section.amount}
                  </span>
                  <span>
                    {open ? (
                      <MinusIcon className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <PlusIcon className="h-5 w-5" aria-hidden="true" />
                    )}
                  </span>
                </span>
              </Disclosure.Button>
              <Disclosure.Panel className="pt-2">
                {section.options.map((option) => (
                  <AttributeListItem
                    key={option.value}
                    option={option}
                    filterHandle={filterHandle}
                  />
                ))}
              </Disclosure.Panel>
            </React.Fragment>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
