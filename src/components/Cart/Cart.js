import React from "react";
import {
  Drawer,
  IconButton,
} from "@material-tailwind/react";

import { useSelector, useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity, removeItem } from "../../redux/features/cart/cartSlice";

export function Cart({ open, openDrawer, closeDrawer }) {
  const dispatch = useDispatch();



  const { cartItem,subTotal,totalItem } = useSelector((state) => state.cart);

  return (
    <React.Fragment>
      <Drawer
        open={open}
        size="460px"
        placement="right"
        onClose={closeDrawer}
        className=" z-30 shadow-xl  !h-auto shadow-green mx-auto  top-16 absolute"
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
        <div className="w-full">
            <div className="m-5">
              <h3 className="text-xl font-bold tracking-wider">
                Shopping Cart {totalItem!==0 && totalItem} item
              </h3>
            </div>
        <div className="container h-[50vh] overflow-x-auto mx-auto mt-5 bg-white">
          
            {cartItem && cartItem.length !== 0 ? (
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
                {
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
                            <button onClick={()=>dispatch(decrementQuantity(item.id))}  className="px-2 py-0 text-lg shadow">-</button>
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
                          ${item.total}
                        </td>
                        <td className=" text-center whitespace-nowrap">
                          <button onClick={()=>dispatch(removeItem(item.id))} className=" text-red-100 bg-red-600 rounded">
                            x
                          </button>
                        </td>
                      </tr>
                    );
                  })
                }

              
              </tbody>
            </table>)
            : (
                <div className="flex flex-col">
                <img src="/icon-empty-cart.png" className="h-60 w-60  mx-auto" alt="empty cart" />
                <h3 className="text-xl mt-5 mx-auto font-bold tracking-wider">
                    Your cart is empty
              </h3>
              <p className="lowercase p-10">
              Looks like you have not added anything to your cart. Go ahead & explore top categories
              </p>
            
                </div>
                )}
            
          </div>
          <div className="flex">
                  <div className="py-3 px-2 text-center whitespace-nowrap"></div>
                  <div className="py-3 px-2 font-extrabold text-center whitespace-nowrap">
                    Subtotal - ${subTotal} (include tax)
                  </div>
                </div>
        </div>
        <div className="flex justify-start w-full">
            
              <button
                className="
              px-6
              py-3
              w-full
              m-5
              rounded-2xl
              text-sm text-white
              bg-pink

              hover:bg-blue
            "
              >
                Proceed to Checkout
              </button>
          </div>
      </Drawer>
    </React.Fragment>
  );
}
