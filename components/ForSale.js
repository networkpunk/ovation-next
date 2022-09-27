import { Fragment, useState, useEffect } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";

import metaData from "../public/metadata.json";
import ItemGrid from "../components/ItemGrid";
import AttributeListBox from "../components/AttributeListBox";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

const subCategories = [{ name: "Founder's Collection", href: "#" }];

const filters = [
  {
    id: "edition",
    name: "Special Edition",
    amount: 4,
    options: [
      { value: "Genesis", label: "Genesis", checked: false, amount: 1 },
      { value: "Collector's", label: "Collector's", checked: false, amount: 3 },
      { value: "Standard", label: "Standard", checked: false, amount: 34 },
      { value: "Airdrop", label: "Airdrop", checked: false, amount: 5 },
    ],
  },
  {
    id: "cardType",
    name: "Card Type",
    amount: 8,
    options: [
      { value: "Celebratory", label: "Celebratory", checked: false, amount: 1 },
      {
        value: "Get Well Soon",
        label: "Get Well Soon",
        checked: false,
        amount: 3,
      },
      { value: "Halloween", label: "Halloween", checked: false, amount: 34 },
      { value: "Easter", label: "Easter", checked: false, amount: 5 },
      {
        value: "Congratulations",
        label: "Congratulations",
        checked: false,
        amount: 1,
      },
      { value: "Birthday", label: "Birthday", checked: false, amount: 3 },
      { value: "Valentines", label: "Valentines", checked: false, amount: 5 },
    ],
  },
];

const exFilters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: true },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [itemsDisplayed, setItemsDisplayed] = useState(metaData);

  const handleFilter = (option) => {
    if (selectedFilters.includes(option)) {
      console.log("remove", option);
      const newFilters = selectedFilters.filter((filter) => {
        return filter !== option;
      });
      setSelectedFilters(newFilters);
    } else {
      const concat = selectedFilters.concat(option);
      setSelectedFilters(concat);
      console.log("add", option);
    }
  };

  useEffect(() => {
    if (selectedFilters.length === 0) {
      setItemsDisplayed(metaData);
    } else {
      const filtered = metaData.filter((item) => {
        if (
          item.attributes.some((att) => {
            if (
              selectedFilters.some((filter) => {
                if (filter === att.value) return 1;
              })
            ) {
              return 1;
            }
          })
        )
          return item;
      });
      console.log("fuck my shit");
      setItemsDisplayed(filtered);
    }
  }, [selectedFilters, setItemsDisplayed]);

  useEffect(() => {
    console.log("filters selected:", selectedFilters);
  }, [selectedFilters, setSelectedFilters]);

  return (
    <div className="bg-black">
      <div>
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transdiv"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transdiv"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="mt-4 border-gray-200">
                    <AttributeListBox attributes={filters} />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-12 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Ovation NFT
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transdiv opacity-0 scale-95"
                  enterTo="transdiv opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transdiv opacity-100 scale-100"
                  leaveTo="transdiv opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-4 gap-y-10 lg:grid-cols-4">
              <div className="hidden lg:block">
                <AttributeListBox
                  attributes={filters}
                  filterHandle={handleFilter}
                />
              </div>
              <div className="lg:col-span-3 bg-white rounded-md px-2 py-2">
                <ItemGrid metaData={itemsDisplayed} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
