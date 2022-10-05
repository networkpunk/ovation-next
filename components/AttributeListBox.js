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

export default function AttributeListBox({
  filters,
  selectedFilters,
  filterHandle,
}) {
  const isChecked = (option) => {
    if (
      selectedFilters.some((filter) => {
        if (filter === option.value) return 1;
      })
    ) {
      return true;
    }
    return false;
  };

  return (
    <React.Fragment>
      {filters.map((section) => (
        <Disclosure
          defaultOpen={true}
          as="div"
          key={section.id}
          className="mx-2 pt-2"
        >
          {({ open }) => (
            <React.Fragment>
              <Disclosure.Button className="flex items-center w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="font-semibold text-lg">{section.name}</span>
                <span className="flex items-center">
                  <span className="mr-2 text-xs text-gray-600">
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
                    checked={isChecked(option)}
                    filterHandle={filterHandle}
                  />
                ))}
              </Disclosure.Panel>
            </React.Fragment>
          )}
        </Disclosure>
      ))}
    </React.Fragment>
  );
}
