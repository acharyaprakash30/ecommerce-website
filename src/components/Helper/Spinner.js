import React from "react"
import './Helper.css'
const Spinner = () => {
    return (
      <div className='bg-gray/75'>
      <div className='flex items-center justify-center h-screen max-w-screen'>
        <h1 className="text-pink  ecommerce-text">Ecommerce</h1>
      </div>
      <div className='loader'>
        <div className='loader--dot'></div>
        <div className='loader--dot'></div>
        <div className='loader--dot'></div>
        <div className='loader--dot'></div>
        <div className='loader--dot'></div>
        <div className='loader--dot'></div>
        <div className='loader--dot'></div>
        <div className='loader--dot'></div>
        {/*         <div className="loader--text"></div> */}
      </div>
    </div>
    )
  }
  
  export default Spinner