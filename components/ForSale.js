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
import MobileFilterDrawer from "./MobileFilterDrawer";

const filters = [
  {
    id: "edition",
    name: "Special Edition",
    amount: 4,
    options: [
      { value: "Genesis", label: "Genesis", checked: 0, amount: 1 },
      { value: "Collectors", label: "Collector's", checked: 0, amount: 18 },
      { value: "Standard", label: "Standard", checked: 0, amount: 16 },
      { value: "Airdrop", label: "Airdrop", checked: 0, amount: 12 },
    ],
  },
  {
    id: "cardType",
    name: "Card Type",
    amount: 7,
    options: [
      { value: "Celebratory", label: "Celebratory", checked: 0, amount: 4 },
      {
        value: "Get Well Soon",
        label: "Get Well Soon",
        checked: false,
        amount: 5,
      },
      { value: "Halloween", label: "Halloween", checked: 0, amount: 3 },
      { value: "Easter", label: "Easter", checked: 0, amount: 2 },
      {
        value: "Congratulations",
        label: "Congratulations",
        checked: false,
        amount: 6,
      },
      { value: "Birthday", label: "Birthday", checked: 0, amount: 9 },
      { value: "Valentines", label: "Valentines", checked: 0, amount: 3 },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [itemsDisplayed, setItemsDisplayed] = useState(metaData);

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

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

  function compare(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  // this hook is going through the selected filters which is just the list of values, pretty bad
  useEffect(() => {
    // if no filters are selected
    if (selectedFilters.length === 0) {
      // show all of the items
      setItemsDisplayed(metaData);
    } else {
      //
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
      console.log("displaying", filtered);
      setItemsDisplayed(filtered);
    }
  }, [selectedFilters, setItemsDisplayed]);

  useEffect(() => {
    console.log("filters selected:", selectedFilters);
  }, [selectedFilters, setSelectedFilters]);

  return (
    <main className="h-full mx-auto max-w-7xl">
      <MobileFilterDrawer
        filters={filters}
        selectedFilters={selectedFilters}
        filterHandle={handleFilter}
        mobileFiltersOpen={mobileFiltersOpen}
        setMobileFiltersOpen={setMobileFiltersOpen}
      />
      <div className="mx-auto px-4">
        <div className="flex items-baseline justify-between border-b border-gray-200/20 py-4">
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Founders Collection
          </h1>
          <button
            type="button"
            className="text-gray-200/80 hover:text-white sm:ml-6 lg:hidden"
            onClick={() => setMobileFiltersOpen(true)}
          >
            <FunnelIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <section className="py-4">
          <div className="grid grid-cols-1 gap-x-4 gap-y-10 lg:grid-cols-4">
            <div className="lg:col-span-3 bg-gray-50/20 rounded-md px-2 py-2">
              <ItemGrid metaData={itemsDisplayed} />
            </div>
            <div className="hidden lg:block">
              <div className="bg-gray-50/20 rounded-lg pb-2">
                <AttributeListBox
                  filters={filters}
                  selectedFilters={selectedFilters}
                  filterHandle={handleFilter}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
