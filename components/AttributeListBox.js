import React from "react"
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react"
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid"
import AttributeListItem from "./AttributeListItem"

export default function AttributeListBox({ attributes, filterHandle }) {
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
              <Disclosure.Panel className="pt-6">
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
    </React.Fragment>
  )
}
