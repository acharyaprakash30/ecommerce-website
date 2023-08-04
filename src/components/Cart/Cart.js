import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity } from "../../redux/features/cart/cartSlice";

export function Cart({ open, openDrawer, closeDrawer }) {
  const dispatch = useDispatch();

  const { cartItem } = useSelector((state) => state.cart);

  return (
    <React.Fragment>
      <Drawer
        open={open}
        size="46vw"
        placement="right"
        onClose={closeDrawer}
        className=" z-50 mx-auto overflow-x-auto  top-16 absolute"
      >
        <div className=" flex items-center justify-between">
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="container mx-auto mt-5 bg-white">
          <div className="w-full">
            <div className="m-5">
              <h3 className="text-xl font-bold tracking-wider">
                Shopping Cart 3 item
              </h3>
            </div>
            <table className=" shadow-inner">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 font-bold whitespace-nowrap">Product</th>
                  <th className="py-3 font-bold whitespace-nowrap">Qty</th>
                  <th className="py-3 font-bold whitespace-nowrap">Price</th>
                  <th className="py-3 font-bold whitespace-nowrap">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItem && cartItem.length !== 0 ? (
                  cartItem.map((item) => {
                    return (
                      <tr>
                        <td className=" h-auto px-2 py-3  text-center ">
                        <img className="m-auto" width="100px" height="100px" src={item.image} alt={item.title} />
                        <p className="w-[200px]">
                        {item.title}
                        </p>
                        </td>
                        <td className="py-3 px-2 text-center whitespace-nowrap">
                          <div>
                            <button className="px-2 py-0 text-lg shadow">-</button>
                            <input
                              type="text"
                              name="qty"
                              value={item.quantity}
                              className="w-12 text-center text-lg bg-gray-100 outline-none"
                            />
                            <button onClick={()=>dispatch(incrementQuantity(item.id))} className="px-2 py-0 text-lg shadow">+</button>
                          </div>
                        </td>
                        <td className=" text-center whitespace-nowrap">
                          ${item.price}
                        </td>
                        <td className=" text-center whitespace-nowrap">
                          <button className=" text-red-100 bg-red-600 rounded">
                            x
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <p>no item found in cart</p>
                )}

                <tr>
                  <td className="py-3 px-2 text-center whitespace-nowrap"></td>
                  <td className="py-3 px-2 text-center whitespace-nowrap">
                    <div className="font-bold">Total Qty - 4</div>
                  </td>
                  <td className="py-3 px-2 font-extrabold text-center whitespace-nowrap">
                    Total - 40,00 (include tax)
                  </td>
                  <td className="py-3 px-2 text-center whitespace-nowrap">
                    <button className="px-4 py-1 text-red-600 bg-red-100">
                      Clear All
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-end mt-4 space-x-2">
              <button
                className="
              px-6
              py-3
              text-sm text-gray-800
              bg-gray-200
              hover:bg-gray-400
            "
              >
                Cannel
              </button>
              <button
                className="
              px-6
              py-3
              text-sm text-white
              bg-indigo-500
              hover:bg-indigo-600
            "
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
}
