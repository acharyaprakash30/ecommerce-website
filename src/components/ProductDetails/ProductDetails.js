import React, { useEffect } from 'react'
import StarRatingComponent from 'react-star-rating-component'
import { useDispatch,useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getProductById } from '../../redux/features/product/productActions'
import { addToCart } from '../../redux/features/cart/cartSlice'
import { toast } from 'react-hot-toast';

const ProductDetails = () => {
let {id} = useParams();
const dispatch = useDispatch();
useEffect(()=>{
    dispatch(getProductById(id))
},[dispatch,id])
const audio = new Audio("/success.mp3")

const handleCartClick = async(data) =>{
    await audio.play()
  dispatch(addToCart(data))
  toast.success("Item added to cart")
}

const {productById} = useSelector((item)=>item.product)

  return (
<section className="overflow-hidden">
  <div className="container px-5 py-5 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img style={{mixBlendMode:"multiply"}} alt="ecommerce" className="lg:w-1/2 p-10 object-center  border border-gray shadow-2xl rounded-2xl" src={productById?.image}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 text-justify">
        <h2 className="text-sm ">{productById?.category}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{productById?.title}</h1>
        <div className="flex  mb-4">
        <StarRatingComponent 
          name="rate2" 
          editing={false}
          renderStarIcon={() => <span><svg aria-hidden="true" className="h-5 w-5 mt-2   text-yellow-300 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg></span>}
          starCount={5}
          value={productById?.rating.rate}
        />
            
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
            <Link to='#' className="text-gray hover:text-pink">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>
            <Link to='#' className="ml-2 text-gray hover:text-pink">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </Link>
            <Link to='#' className="ml-2 text-gray hover:text-pink">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </Link>
          </span>
        </div>
        <p className="leading-relaxed">{productById?.description}</p>
        <div className="flex justify-around mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
          <div className="flex">
            <span className="mr-3">Color</span>
            <button className="border-2 border-gray rounded-full w-6 h-6 focus:outline-none"></button>
            <button className="border-2 border-pink ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
            <button className="border-2 border-green  ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
          </div>
          <div className="flex ml-6 items-center">
            <span className="mr-3">Size</span>
            <div className="relative">
              <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
          <p className="title-font  font-medium text-2xl text-gray-900">${productById?.price}</p>
        </div>
        <div className="flex justify-between">
        <div onClick={()=>handleCartClick(productById)} title='add to cart' className="flex justify-around items-center cursor-pointer  rounded-md bg-pink hover:bg-gray hover:text-pink  px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none active:bg-pink">
        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>Add To Cart
      </div>
        <div className="flex items-center cursor-pointer  justify-center rounded-md bg-pink  focus:ring-violet-300 hover:bg-gray hover:text-pink  px-5 py-2.5 text-center text-sm font-medium text-white  focus:outline-none active:bg-pink">
        Proceed To Checkout
      </div>
         
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default ProductDetails