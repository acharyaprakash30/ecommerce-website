import React from 'react'
import { useDispatch } from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { toast } from 'react-hot-toast';

const ProductCard = ({item}) => {

  const dispatch = useDispatch();
  const handleCardClick = (data) =>{
    dispatch(addToCart(data))
    toast.success("Item added to cart")
    
  }
  //increase it by 5%
  const increasedPrice = (Number(item?.price)+(Number(item?.price) * 5)/100).toFixed(2);
  return (
    <div className="hover:scale-105 transition duration-500 relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray shadow-lg">
    <div className="relative m-auto flex h-60 overflow-hidden rounded-xl" href="#">
      <img className="object-fill p-2" src={item?.image} alt="productimage" />
      <span className="absolute top-0 left-0 m-2 rounded-full bg-pink px-2 text-center text-sm font-medium text-white">39% OFF</span>
    </div>
    <div className="mt-4 px-5 pb-5">
        <h5 className=" tracking-tight font-bold text-pink">{item?.title}</h5>
      <div className="mt-2 mb-5 flex items-center justify-between">
        <p>
          <span className="text-3xl font-bold text-pink">${item?.price}</span>
          <span className="text-sm text-pink line-through">${increasedPrice}</span>
        </p>
        <div className="flex items-center">
        <StarRatingComponent 
          name="rate2" 
          editing={false}
          renderStarIcon={() => <span><svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg></span>}
          starCount={5}
          value={item.rating.rate} 
        />
        </div>
      </div>
      <div onClick={()=>handleCardClick(item)} className="flex items-center cursor-pointer justify-center rounded-md bg-pink  focus:ring-violet-300  px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue focus:outline-none active:bg-pink">
        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        Add to cart</div>
    </div>
  </div>
  )
}

export default ProductCard