import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { Cart } from "../Cart/Cart";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Gallery", href: "/gallery", current: false },
  { name: "Products", href: "/product", current: false },
  { name: "Delivery", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  const { totalItem } = useSelector((item) => item.cart);

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto  max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-pink hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <Link
                      to="/"
                      className="text-black hover:bg-pink hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Home
                    </Link>
                    {navigation.map((item) => (
                      <Link
                        to={item.href}
                        key={item.name}
                        className={classNames(
                          item.current
                            ? " text-white"
                            : "text-black hover:bg-pink hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="relative rounded-md px-3 py-2 text-sm font-medium  bg-pink text-white hover:bg-gray hover:text-pink">
                  <p className="absolute right-3 text-lg top-0 font-bold ">
                    {totalItem}
                  </p>
                  <svg
                    onClick={openDrawer}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6  h-6 ml-3 mr-3 font-bold  cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  className={classNames(
                    item.current
                      ? "bg-pink text-white"
                      : "text-black hover:bg-green-50 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  <Link to={item.href}>{item.name}</Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
          {isOpen && (
            <Cart
              openDrawer={openDrawer}
              open={isOpen}
              closeDrawer={closeDrawer}
            />
          )}
        </>
      )}
    </Disclosure>
  );
}
